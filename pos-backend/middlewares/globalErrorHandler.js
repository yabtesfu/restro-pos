const handleCastErrorDB = (error) => {
  return {
    statusCode: 400,
    message: `Invalid ${error.path}: ${error.value}`,
  };
};

const handleValidationErrorDB = (error) => {
  const errors = Object.values(error.errors).map((item) => item.message);

  return {
    statusCode: 400,
    message: `Invalid input data. ${errors.join('. ')}`,
  };
};

const handleDuplicateFieldsDB = (error) => {
  const value = error.keyValue ? Object.values(error.keyValue).join(', ') : 'value';

  return {
    statusCode: 400,
    message: `Duplicate field value: ${value}. Please use another value.`,
  };
};

const sendErrorDev = (error, res) => {
  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
    stack: error.stack,
    error,
  });
};

const sendErrorProd = (error, res) => {
  if (error.isOperational) {
    return res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  }

  console.error('ERROR:', error);

  return res.status(500).json({
    status: 'error',
    message: 'Something went wrong.',
  });
};

const globalErrorHandler = (error, req, res, next) => {
  let handledError = { ...error };
  handledError.message = error.message;
  handledError.name = error.name;
  handledError.stack = error.stack;
  handledError.statusCode = error.statusCode || 500;
  handledError.status = error.status || 'error';
  handledError.isOperational = error.isOperational;

  if (error.name === 'CastError') {
    handledError = { ...handledError, ...handleCastErrorDB(error), status: 'fail', isOperational: true };
  }

  if (error.name === 'ValidationError') {
    handledError = { ...handledError, ...handleValidationErrorDB(error), status: 'fail', isOperational: true };
  }

  if (error.code === 11000) {
    handledError = { ...handledError, ...handleDuplicateFieldsDB(error), status: 'fail', isOperational: true };
  }

  if (process.env.NODE_ENV === 'production') {
    return sendErrorProd(handledError, res);
  }

  return sendErrorDev(handledError, res);
};

module.exports = globalErrorHandler;

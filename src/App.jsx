import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Home, Auth, Orders, Tables } from './pages'
import Header from './components/shared/Header' 


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables />} />
        </Routes>
      </Router>

    </>
  );
}

export default App

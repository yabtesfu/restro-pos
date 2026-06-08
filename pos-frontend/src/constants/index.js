import { BiSolidDish } from 'react-icons/bi';
import { MdCategory, MdTableBar } from 'react-icons/md';

const foodImages = {
  doroWot: 'https://commons.wikimedia.org/wiki/Special:FilePath/Injera%20and%20doro%20wat.jpg?width=600',
  shiro: 'https://commons.wikimedia.org/wiki/Special:FilePath/Enjera%20be%20shiro%20wot.jpg?width=600',
  tibs: 'https://commons.wikimedia.org/wiki/Special:FilePath/Siga%20Tibs.jpg?width=600',
  chikinaTibs: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ethiopia-%20Tibs%20Fitfit.jpg?width=600',
  kitfo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kitfo.jpg?width=600',
  firfir: 'https://commons.wikimedia.org/wiki/Special:FilePath/Firfir.JPG?width=600',
  injera: 'https://commons.wikimedia.org/wiki/Special:FilePath/Injera%20from%20ivory%20teff.jpg?width=600',
  misirWot: 'https://commons.wikimedia.org/wiki/Special:FilePath/Misir%20Wot%20and%20Gomen%20Besiga%20-%20Abyssinia%2C%20Brighton.jpg?width=600',
  coffee: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ethiopian%20Coffee%20Ceremony.jpg?width=600',
};

export const popularDishes = [
    {
      id: 1,
      image: foodImages.doroWot,
      name: 'Doro Wot',
      numberOfOrders: 320,
    },
    {
      id: 2,
      image: foodImages.shiro,
      name: 'Shiro Wot',
      numberOfOrders: 275,
    },
    {
      id: 3,
      image: foodImages.tibs,
      name: 'Siga Tibs',
      numberOfOrders: 260,
    },
    {
      id: 4,
      image: foodImages.chikinaTibs,
      name: 'Chikina Tibs',
      numberOfOrders: 210,
    },
    {
      id: 5,
      image: foodImages.kitfo,
      name: 'Kitfo',
      numberOfOrders: 240,
    },
    {
      id: 6,
      image: foodImages.firfir,
      name: 'Injera Firfir',
      numberOfOrders: 185,
    },
    {
      id: 7,
      image: foodImages.misirWot,
      name: 'Misir Wot',
      numberOfOrders: 205,
    },
    {
      id: 8,
      image: foodImages.injera,
      name: 'Extra Injera',
      numberOfOrders: 300,
    },
    {
      id: 9,
      image: foodImages.coffee,
      name: 'Ethiopian Coffee',
      numberOfOrders: 145,
    },
    {
      id: 10,
      image: foodImages.tibs,
      name: 'Awaze Tibs',
      numberOfOrders: 175,
    },
  ];


export const tables = [
    { id: 1, name: "Table 1", status: "Booked", initial: "AM", seats: 4 },
    { id: 2, name: "Table 2", status: "Available", initial: "MB", seats: 6 },
    { id: 3, name: "Table 3", status: "Booked", initial: "JS", seats: 2 },
    { id: 4, name: "Table 4", status: "Available", initial: "HR", seats: 4 },
    { id: 5, name: "Table 5", status: "Booked", initial: "PL", seats: 3 },
    { id: 6, name: "Table 6", status: "Available", initial: "RT", seats: 4 },
    { id: 7, name: "Table 7", status: "Booked", initial: "LC", seats: 5 },
    { id: 8, name: "Table 8", status: "Available", initial: "DP", seats: 5 },
    { id: 9, name: "Table 9", status: "Booked", initial: "NK", seats: 6 },
    { id: 10, name: "Table 10", status: "Available", initial: "SB", seats: 6 },
    { id: 11, name: "Table 11", status: "Booked", initial: "GT", seats: 4 },
    { id: 12, name: "Table 12", status: "Available", initial: "JS", seats: 6 },
    { id: 13, name: "Table 13", status: "Booked", initial: "EK", seats: 2 },
    { id: 14, name: "Table 14", status: "Available", initial: "QN", seats: 6 },
    { id: 15, name: "Table 15", status: "Booked", initial: "TW", seats: 3 }
  ];
  
export const startersItem = [
    {
      id: 1,
      name: "Sambusa",
      price: 80,
      category: "Starter",
      image: foodImages.injera
    },
    {
      id: 2,
      name: "Timatim Salad",
      price: 120,
      category: "Starter",
      image: foodImages.misirWot
    },
    {
      id: 3,
      name: "Azifa",
      price: 140,
      category: "Starter",
      image: foodImages.shiro
    },
    {
      id: 4,
      name: "Kategna",
      price: 110,
      category: "Starter",
      image: foodImages.injera
    },
    {
      id: 5,
      name: "Chechebsa",
      price: 160,
      category: "Breakfast",
      image: foodImages.firfir
    },
    {
      id: 6,
      name: "Extra Injera",
      price: 35,
      category: "Side",
      image: foodImages.injera
    }
  ];
  
export const mainCourse = [
  {
    id: 1,
    name: "Doro Wot",
    price: 420,
    category: "Chicken",
    image: foodImages.doroWot
  },
  {
    id: 2,
    name: "Shiro Wot",
    price: 220,
    category: "Vegetarian",
    image: foodImages.shiro
  },
  {
    id: 3,
    name: "Siga Tibs",
    price: 480,
    category: "Beef",
    image: foodImages.tibs
  },
  {
    id: 4,
    name: "Chikina Tibs",
    price: 520,
    category: "Beef",
    image: foodImages.chikinaTibs
  },
  {
    id: 5,
    name: "Kitfo",
    price: 560,
    category: "Beef",
    image: foodImages.kitfo
  },
  {
    id: 6,
    name: "Awaze Tibs",
    price: 500,
    category: "Beef",
    image: foodImages.tibs
  }
];

export const beverages = [
  {
    id: 1,
    name: "Ethiopian Coffee",
    price: 70,
    category: "Hot",
    image: foodImages.coffee
  },
  {
    id: 2,
    name: "Macchiato",
    price: 85,
    category: "Hot",
    image: foodImages.coffee
  },
  {
    id: 3,
    name: "Spiced Tea",
    price: 45,
    category: "Hot",
    image: foodImages.coffee
  },
  {
    id: 4,
    name: "Mango Juice",
    price: 120,
    category: "Cold",
    image: foodImages.coffee
  },
  {
    id: 5,
    name: "Spris",
    price: 130,
    category: "Cold",
    image: foodImages.coffee
  },
  {
    id: 6,
    name: "Ambo Water",
    price: 55,
    category: "Cold",
    image: foodImages.coffee
  }
];

export const soups = [
  {
    id: 1,
    name: "Ye Dinich Wot",
    price: 190,
    category: "Vegetarian",
    image: foodImages.shiro
  },
  {
    id: 2,
    name: "Atkilt Wot",
    price: 210,
    category: "Vegetarian",
    image: foodImages.misirWot
  },
  {
    id: 3,
    name: "Misir Wot",
    price: 230,
    category: "Vegetarian",
    image: foodImages.misirWot
  },
  {
    id: 4,
    name: "Alicha Wot",
    price: 250,
    category: "Mild",
    image: foodImages.doroWot
  },
  {
    id: 5,
    name: "Gomen",
    price: 180,
    category: "Vegetarian",
    image: foodImages.misirWot
  },
  {
    id: 6,
    name: "Fasting Combo",
    price: 340,
    category: "Vegetarian",
    image: foodImages.shiro
  }
];

export const desserts = [
  {
    id: 1,
    name: "Baklava",
    price: 110,
    category: "Dessert",
    image: foodImages.coffee
  },
  {
    id: 2,
    name: "Rice Pudding",
    price: 120,
    category: "Dessert",
    image: foodImages.coffee
  },
  {
    id: 3,
    name: "Honey Bread",
    price: 95,
    category: "Dessert",
    image: foodImages.injera
  },
  {
    id: 4,
    name: "Sweet Ambasha",
    price: 90,
    category: "Dessert",
    image: foodImages.injera
  }
];

export const pizzas = [
  {
    id: 1,
    name: "Injera Firfir",
    price: 210,
    category: "Breakfast",
    image: foodImages.firfir
  },
  {
    id: 2,
    name: "Egg Firfir",
    price: 240,
    category: "Breakfast",
    image: foodImages.firfir
  },
  {
    id: 3,
    name: "Ful",
    price: 180,
    category: "Breakfast",
    image: foodImages.shiro
  }
];

export const alcoholicDrinks = [
  {
    id: 1,
    name: "Tej",
    price: 180,
    category: "Traditional",
    image: foodImages.coffee
  },
  {
    id: 2,
    name: "Tella",
    price: 120,
    category: "Traditional",
    image: foodImages.coffee
  },
  {
    id: 3,
    name: "Draft Beer",
    price: 160,
    category: "Alcoholic",
    image: foodImages.coffee
  },
  {
    id: 4,
    name: "Red Wine",
    price: 220,
    category: "Alcoholic",
    image: foodImages.coffee
  },
  {
    id: 5,
    name: "Areke",
    price: 140,
    category: "Traditional",
    image: foodImages.coffee
  },
  {
    id: 6,
    name: "House Cocktail",
    price: 260,
    category: "Alcoholic",
    image: foodImages.coffee
  }
];

export const salads = [
  {
    id: 1,
    name: "Beyaynetu",
    price: 360,
    category: "Vegetarian",
    image: foodImages.misirWot
  },
  {
    id: 2,
    name: "Gomen Besiga",
    price: 390,
    category: "Beef",
    image: foodImages.misirWot
  },
  {
    id: 3,
    name: "Bozena Shiro",
    price: 310,
    category: "Beef",
    image: foodImages.shiro
  },
  {
    id: 4,
    name: "Yebeg Alicha",
    price: 520,
    category: "Lamb",
    image: foodImages.doroWot
  },
  {
    id: 5,
    name: "Dulet",
    price: 430,
    category: "Beef",
    image: foodImages.tibs
  
  }
];


export const menus = [
  { id: 1, name: "Starters", bgColor: "#be3e3f", icon: "ST", items: startersItem },
  { id: 2, name: "Wot & Tibs", bgColor: "#025cca", icon: "WT", items: mainCourse },
  { id: 3, name: "Drinks", bgColor: "#02ca3a", icon: "DR", items: beverages },
  { id: 4, name: "Fasting", bgColor: "#735f32", icon: "FS", items: soups },
  { id: 5, name: "Desserts", bgColor: "#7f167f", icon: "DS", items: desserts },
  { id: 6, name: "Breakfast", bgColor: "#285430", icon: "BR", items: pizzas },
  { id: 7, name: "Traditional Drinks", bgColor: "#b73e3e", icon: "TD", items: alcoholicDrinks },
  { id: 8, name: "Combos", bgColor: "#5b45b0", icon: "CB", items: salads }
]

export const metricsData = [
  { title: "Revenue", value: "₹50,846.90", percentage: "12%", color: "#025cca", isIncrease: false },
  { title: "Outbound Clicks", value: "10,342", percentage: "16%", color: "#02ca3a", isIncrease: true },
  { title: "Total Customer", value: "19,720", percentage: "10%", color: "#f6b100", isIncrease: true },
  { title: "Event Count", value: "20,000", percentage: "10%", color: "#be3e3f", isIncrease: false },
];

export const itemsData = [
  { title: "Total Categories", value: "8", percentage: "12%", color: "#5b45b0", isIncrease: false },
  { title: "Total Dishes", value: "50", percentage: "12%", color: "#285430", isIncrease: true },
  { title: "Active Orders", value: "12", percentage: "12%", color: "#735f32", isIncrease: true },
  { title: "Total Tables", value: "10", color: "#7f167f"}
];

export const orders = [
  {
    id: "101",
    customer: "Amrit Raj",
    status: "Ready",
    dateTime: "January 18, 2025 08:32 PM",
    items: 8,
    tableNo: 3,
    total: 250.0,
  },
  {
    id: "102",
    customer: "John Doe",
    status: "In Progress",
    dateTime: "January 18, 2025 08:45 PM",
    items: 5,
    tableNo: 4,
    total: 180.0,
  },
  {
    id: "103",
    customer: "Emma Smith",
    status: "Ready",
    dateTime: "January 18, 2025 09:00 PM",
    items: 3,
    tableNo: 5,
    total: 120.0,
  },
  {
    id: "104",
    customer: "Chris Brown",
    status: "In Progress",
    dateTime: "January 18, 2025 09:15 PM",
    items: 6,
    tableNo: 6,
    total: 220.0,
  },
];


export const buttons = [
  { label: "Add Table", icon: MdTableBar, action: "table" },
  { label: "Add Category", icon: MdCategory, action: "category" },
  { label: "Add Dishes", icon: BiSolidDish, action: "dishes" },
];
export const tabs = ["Metrics", "Orders", "Payments"];

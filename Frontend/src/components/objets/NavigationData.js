// navigationData.js
import img1 from '../../assets/electronics-banner-1.jpg'
import img2 from '../../assets/mens-banner.jpg'
import img3 from '../../assets/womens-banner.jpg'
import img4 from '../../assets/electronics-banner-2.jpg'

export const navigationData = [
  { 
    title: "HOME", 
    type: "link", 
    path: "/" 
  },
  { 
    title: "CATEGORIES", 
    type: "mega-menu",
    columns: [
      {
        heading: "Electronics",
        items: ["Desktop", "Laptop", "Camera", "Tablet", "Headphone"],
        img: img1
      },
      {
        heading: "Men's",
        items: ["Formal", "Casual", "Sports", "Jacket", "Sunglasses"],
        img: img2
      },
      {
        heading: "Women's",
        items: ["Formal", "Casual", "Perfume", "Cosmetics", "Bags"],
        img: img3
      },
      {
        heading: "Electronics",
        items: ["Smart Watch", "Smart TV", "Keyboard", "Mouse", "Microphone"],
        img: img4
      }
    ]
  },
  {
    title: "MEN'S",
    type: "dropdown",
    items: ["Shirts", "Shorts & Jeans", "Safety Shoes", "Wallet"]
  },
  {
    title: "WOMEN'S",
    type: "dropdown",
    items: ["Dress & Frock", "Earrings", "Neckless", "Makeup Kit"]
  },
  {
    title: "JEWELRY",
    type: "dropdown",
    items: ["Earrings", "Couple Rings", "Neckless", "Bracelets"]
  },
  {
    title: "PERFUME",
    type: "dropdown",
    items: ["Cloths Perfume", "Deodorant", "Flower Fragrance", "Air Freshener"]
  },
  { title: "BLOG", type: "simple" },
  { title: "HOT OFFERS", type: "simple" }
];

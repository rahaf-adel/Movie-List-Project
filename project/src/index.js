import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
import img3 from "./images/img3.png"
import img4 from "./images/img4.png"
import img5 from "./images/img5.png"
import img6 from "./images/img6.png"
import img7 from "./images/img7.png"
import img8 from "./images/img8.png"
import img9 from "./images/img9.png"
import img10 from "./images/img10.png"
import img11 from "./images/img11.png"
import img12 from "./images/img12.png"
import reportWebVitals from './reportWebVitals';
import { Navbar } from 'react-bootstrap';
import Navbar1 from './Component/Navbar'



const root = ReactDOM.createRoot(document.getElementById('root'));
let cards={
  card1:{
    img:img1,
    title:"Baby Rose Bouquet",
    desc:"This Baby Rose Hand Bouquet is the perfect gift to congratulate a loved one, greet them on a special occasion!.",
    price:"SAR 399"
  },
  card2:{
    img:img2,
    title:"Rose Bouquet",
    desc:"A beautifully fragrant hand tied arrangement Pink roses, Hydrangea and dried flowers.",
    price:"SAR 253"
  },
  card3:{
    img:img3,
    title:"Green Hydrangea Flower",
    desc:"This Green Hydrangea Flower Arrangement is guaranteed to add a pinch of happiness and colors to your loved ones' day.",
    price:"SAR 299"
  },
  card4:{
    img:img4,
    title:"Flower Garden Luxury",
    desc:"This Flower Garden Luxury Flower Arrangement is guaranteed to add a pinch of happiness and colors to your loved ones' day.",
    price:"SAR 850"
  },
  card5:{
    img:img5,
    title:"Sunny One Roses",
    desc:"A bouquet with yellow roses, yellow chrysanthemums, white wax flower and ruscus.",
    price:"SAR 187"
  },
  card6:{
    img:img6,
    title:"Blue Gypsophilia",
    desc:"This Blue Gypsophilia Hand Bouquet is the perfect gift to congratulate a loved one, greet them on a special occasion.",
    price:"SAR 158"
  },
  card7:{
    img:img7,
    title:"Spring Breeze Flowers",
    desc:"Send this Spring Breeze Flowers Bouquet as a gift to your loved ones and watch the smiles on their faces.",
    price:"SAR 230"
  },
  card8:{
    img:img8,
    title:"Cylindrical Box Flower",
    desc:"This Flower Arrangement in a Cylindrical Box is the perfect gift to congratulate a loved one, greet them on a special occasion.",
    price:"SAR 650"
  },
  card9:{
    img:img9,
    title:"Pink Crystal Coral",
    desc:"This Pink Crystal Coral Flower Arrangement is guaranteed to add a pinch of happiness and colors to your loved ones' day.",
    price:"SAR 349"
  },
  card10:{
    img:img10,
    title:"Little Charmer",
    desc:"Yellow and peach roses, yellow alstroemeria, and white hydrangeas.",
    price:"SAR 322"
  },
  card11:{
    img:img11,
    title:"Coral Rainbow",
    desc:"A mix of sprayed coral peach hydrangeas and a rainbow of baby's breath.",
    price:"SAR 391"
  },
  card12:{
    img:img12,
    title:"Flawless One Roses",
    desc:"36 long stem white roses.",
    price:"SAR 374"
  },
}
root.render(
  <React.StrictMode>
    <App cardInfo={cards}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import Product from "./components/product/Product";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import FirstDiv from "./components/productDivision/FirstDiv";
import SecondDiv from "./components/productDivision/SeconDiv";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
];

function App() {
  // Split the products array into two divisions
  const firstHalf = productsArr.slice(0, 4); // First 4 products
  const secondHalf = productsArr.slice(4); // Remaining products
  return (
    <>
      <Header />
      <h1 className="top mt-4 pt-5 pb-5">The Generics</h1>
      <FirstDiv products={firstHalf} />
      <SecondDiv products={secondHalf} />
      <div>
        <button className="finalAdd">Add to cart</button>
      </div>
      <Footer />
    </>
  );
}

export default App;

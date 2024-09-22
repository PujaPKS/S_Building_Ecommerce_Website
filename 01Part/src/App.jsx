import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

function App() {
  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: '70px' }}>
        <h1 className="text-center">The Generics</h1> {/* Added title here */}
        <div className="row">
          {productsArr.map((product, index) => (
            <div className="col-md-6" key={index}>
              <Product
                title={product.title}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

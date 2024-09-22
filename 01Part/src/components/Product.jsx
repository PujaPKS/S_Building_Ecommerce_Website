import React from 'react';

const Product = ({ title, price, imageUrl }) => {
  return (
    <div className="card mb-4">
      <div className="card-img-top" style={{ overflow: 'hidden', height: '200px' }}>
        <img
          src={imageUrl}
          alt={title}
          className="img-fluid"
          style={{ transition: 'transform 0.3s ease' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <button className="btn btn-primary">ADD TO CART</button>
      </div>
    </div>
  );
};

export default Product;

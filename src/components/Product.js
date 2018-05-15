import React, { Component } from 'react';
import productSrc from '../img/products/product_1.jpg';
import userSrc from '../img/userpics/user_0.jpg';

class Product extends Component {
  render() {
    return (
      <div className='item'>
        <div className='image'>
            <img src={productSrc} alt="" />
        </div>
        <div className='middle aligned content'>
            <div className='description'>
              <a>T-shirts</a>
              <p>High quality T-Shirts by independent artists and designers from around the world</p>
            </div>
            <div className='extra'>
              <span>Submitted by:</span>
              <img
                  className='ui avatar image'
                  src={userSrc}
                  alt=""
              />
            </div>
          </div>
      </div>
    );
  }
}

export default Product;

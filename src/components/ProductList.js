import React, { Component } from 'react';
import Product from './Product';
import productData from '../productsData';

class ProductList extends Component {
    render() {
        return (
            <div className='ui unstackable items'>
                {productData.map(product =>
                    <Product
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        url={product.url}
                        votes={product.votes}
                        submitterUserpicUrl={product.submitterUserpicUrl}
                        productImageUrl={product.productImageUrl}
                    />
                )}
            </div>
        );
    }
}

export default ProductList;

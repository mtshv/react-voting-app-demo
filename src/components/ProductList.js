import React, { Component } from 'react';
import Product from './Product';
import productData from '../productsData';

class ProductList extends Component {
    render() {
        const products = productData.sort((a, b) => (
            b.votes - a.votes
        ));

        return (
            <div className='ui unstackable items'>
                {products.map(product =>
                    <Product
                        key={'product-' + product.id}
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

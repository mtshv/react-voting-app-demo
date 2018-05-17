import React, { Component } from 'react';
import Product from './Product';
import productsData from '../productsData';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        this.setState({ products: productsData });
    }

    handleProductVote = (productId, isUpVote) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: isUpVote ? product.votes + 1 : product.votes - 1,
                });
            } else {
                return product;
            }
        });
        this.setState({
            products: nextProducts,
        });
    };

    render() {
        const products = this.state.products.sort((a, b) => (
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
                        onVote={this.handleProductVote}
                    />
                )}
            </div>
        );
    }
}

export default ProductList;

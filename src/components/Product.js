import React, { Component } from 'react';

class Product extends Component {
    handleVote = (voteType) => () => {
        this.props.onVote(this.props.id, voteType);
    };

    render() {
        const { productImageUrl, votes, url, title, description, submitterUserpicUrl } = this.props;

        return (
            <div className='item'>
                <div className='image'>
                    <img src={productImageUrl} alt='' />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleVote(true)}>
                            <i className='large caret up icon' />
                        </a>
                        <a onClick={this.handleVote(false)}>
                            <i className='large red caret down icon' />
                        </a>
                        {votes}
                    </div>
                    <div className='description'>
                        <a href={url}>
                            {title}
                        </a>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src={submitterUserpicUrl}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;

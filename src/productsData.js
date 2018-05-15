import productImage_1 from './img/products/product_1.jpg';
import productImage_2 from './img/products/product_2.jpg';
import productImage_3 from './img/products/product_3.jpg';
import productImage_4 from './img/products/product_4.jpg';
import productImage_5 from './img/products/product_5.jpg';

import user_1 from './img/userpics/user_1.jpg';
import user_2 from './img/userpics/user_2.jpg';
import user_3 from './img/userpics/user_3.jpg';
import user_4 from './img/userpics/user_4.jpg';
import user_5 from './img/userpics/user_5.jpg';

function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
}

const products = [
    {
        id: 1,
        title: 'T-shirts',
        description: 'High quality T-Shirts by independent artists and designers from around the world.',
        url: '#',
        votes: generateVoteCount(),
        submitterUserpicUrl: user_1,
        productImageUrl: productImage_1,
    },
    {
        id: 2,
        title: 'Hoodie',
        description: 'Shop the the original collection of hoodies on the high street.',
        url: '#',
        votes: generateVoteCount(),
        submitterUserpicUrl: user_2,
        productImageUrl: productImage_2,
    },
    {
        id: 3,
        title: 'T-shirts For Men',
        description: 'Shop for trendy, sporty and stylish T-shirts.',
        url: '#',
        votes: generateVoteCount(),
        submitterUserpicUrl: user_3,
        productImageUrl: productImage_3,
    },
    {
        id: 4,
        title: 'Cap',
        description: ' Browse new arrival Flat Caps, Check latest price.',
        url: '#',
        votes: generateVoteCount(),
        submitterUserpicUrl: user_4,
        productImageUrl: productImage_4,
    },
    {
        id: 5,
        title: 'Women\'s T-Shirt',
        description: 'Crafted of rare cotton, these shirts have an exceptional feel you\'ll want to wear every day.',
        url: '#',
        votes: generateVoteCount(),
        submitterUserpicUrl: user_5,
        productImageUrl: productImage_5,
    },
];

export default products

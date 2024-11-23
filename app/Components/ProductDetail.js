// Products.js
import React from 'react';
import Product from './Product';

const products = [
    { id: 1, name: 'Men\'s Shirt', price: '$20' },
    { id: 2, name: 'Women\'s Dress', price: '$30' },
    { id: 3, name: 'Kid\'s Toy', price: '$15' },
];

const Products = () => {
    return (
        <div>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;

// Import Next.js Response method (optional but recommended)
import { NextResponse } from 'next/server';

export async function GET() {
    // Dummy data - actual data can be fetched from database like MongoDB
    const products = [
        {
            _id: '1',
            name: 'Product 1',
            description: 'This is product 1',
            price: '$10',
            image: '/images/product1.jpg',
        },
        {
            _id: '2',
            name: 'Product 2',
            description: 'This is product 2',
            price: '$20',
            image: '/images/product2.jpg',
        },
        {
            _id: '3',
            name: 'Product 3',
            description: 'This is product 3',
            price: '$30',
            image: '/images/product3.jpg',
        },
    ];

    // Respond with JSON data
    return NextResponse.json(products);
}

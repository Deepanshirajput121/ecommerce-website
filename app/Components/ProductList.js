import { useState, useEffect } from 'react'; // Import useState and useEffect from React
import Link from 'next/link';

export default function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/products'); // API se products fetch karein
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-5">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map(product => (
                    <div key={product._id} className="border rounded-lg p-4">
                        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-700">{product.description}</p>
                        <p className="text-lg font-bold">{product.price}</p>
                        <Link href={`/products/${product._id}`}>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

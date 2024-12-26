"use client"; // This directive makes the component a Client Component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../../src/Components/CartContext';



// Sample product data for demonstration
const products = [
  {
    id: 1,
    name: "Women's Dress",
    price: "$45",
    image: "https://i.pinimg.com/originals/27/af/58/27af5800a8dd5c093e7f490e516497bf.jpg",
    description: "A beautiful dress for all occasions.",
    material: "Cotton",
    size: "S, M, L, XL",
    care: "Hand wash only."
  },
  {
    id: 2,
    name: "Women's Handbag",
    price: "$80",
    image: "https://i.pinimg.com/564x/95/16/be/9516be1b5d1155eb6691d2704b2889e3.jpg",
    description: "A stylish handbag for everyday use.",
    material: "Leather",
    size: "One Size",
    care: "Wipe clean with a damp cloth."
  },
  {
    id: 3,
    name: "Women's Heels",
    price: "$60",
    image: "https://i.pinimg.com/564x/56/5c/80/565c80d037645c4e1804abb956759bd8.jpg",
    description: "Elegant heels perfect for any occasion.",
    material: "Synthetic",
    size: "5, 6, 7, 8, 9, 10",
    care: "Clean with a soft cloth."
  },
  {
    id: 4,
    name: "Women's Sunglasses",
    price: "$35",
    image: "https://i.pinimg.com/564x/a6/eb/4f/a6eb4f3b25d9294428beb1e5f2aa25de.jpg",
    description: "Trendy sunglasses to protect your eyes.",
    material: "Plastic",
    size: "One Size",
    care: "Store in a protective case."
  },
  {
    id: 5,
    name: "Women's Dress",
    price: "$45",
    image: "https://i.pinimg.com/564x/9e/8e/86/9e8e8612ab24c95d1117e47db3fb76bb.jpg",
    description: "A beautiful dress for all occasions.",
    material: "Cotton",
    size: "S, M, L, XL",
    care: "Hand wash only."
  },
  {
    id: 6,
    name: "Women's Handbag",
    price: "$80",
    image: "https://i.pinimg.com/564x/d8/2c/6a/d82c6a52c46d2e443afb9a52db59a0a4.jpg",
    description: "A chic handbag for modern women.",
    material: "Canvas",
    size: "One Size",
    care: "Spot clean only."
  },
  {
    id: 7,
    name: "Women's Heels",
    price: "$60",
    image: "https://i.pinimg.com/564x/8d/52/f3/8d52f345b95ae2352287d20f6c0c5ae7.jpg",
    description: "Comfortable heels for long wear.",
    material: "Suede",
    size: "5, 6, 7, 8, 9, 10",
    care: "Brush with a suede brush."
  },
  {
    id: 8,
    name: "Women's Sunglasses",
    price: "$35",
    image: "https://i.pinimg.com/564x/46/7f/8a/467f8a2d2aba0f56b2d85980715bd34b.jpg",
    description: "Stylish shades for a sunny day.",
    material: "Metal",
    size: "One Size",
    care: "Avoid dropping."
  },
  {
    id: 9,
    name: "Women's Dress",
    price: "$45",
    image: "https://i.pinimg.com/736x/43/ab/5b/43ab5bd15206292bf6c124dfc0dff9b2.jpg",
    description: "Elegant dress for evening events.",
    material: "Silk",
    size: "S, M, L, XL",
    care: "Dry clean only."
  },
  {
    id: 10,
    name: "Women's Handbag",
    price: "$80",
    image: "https://i.pinimg.com/564x/b1/91/4c/b1914c3f765f68bac632835d4939ced2.jpg",
    description: "A fashionable handbag for every occasion.",
    material: "Leather",
    size: "One Size",
    care: "Wipe clean with a damp cloth."
  },
  {
    id: 11,
    name: "Women's Heels",
    price: "$60",
    image: "https://i.pinimg.com/564x/43/3d/8a/433d8a551d65c1e09f754347b6147e48.jpg",
    description: "Classic heels that never go out of style.",
    material: "Genuine Leather",
    size: "5, 6, 7, 8, 9, 10",
    care: "Use leather conditioner."
  },
  {
    id: 12,
    name: "Women's Sunglasses",
    price: "$35",
    image: "https://i.pinimg.com/564x/1c/e6/02/1ce6028e2cd3f58a2a94e5de028b7df9.jpg",
    description: "Protect your eyes with trendy sunglasses.",
    material: "Plastic",
    size: "One Size",
    care: "Keep away from heat."
  },
  {
    id: 13,
    name: "Women's Dress",
    price: "$45",
    image: "https://i.pinimg.com/564x/6f/72/47/6f72472ca45158206c37826007261c5a.jpg",
    description: "Stylish dress for summer outings.",
    material: "Linen",
    size: "S, M, L, XL",
    care: "Machine wash cold."
  },
  {
    id: 14,
    name: "Women's Handbag",
    price: "$80",
    image: "https://i.pinimg.com/564x/1b/e8/dc/1be8dc4d406aacf749edf4cc43885d9f.jpg",
    description: "Elegant handbag that matches any outfit.",
    material: "Vegan Leather",
    size: "One Size",
    care: "Wipe with a soft cloth."
  },
  {
    id: 15,
    name: "Women's Heels",
    price: "$60",
    image: "https://i.pinimg.com/564x/52/c1/a4/52c1a41d8663589c6265b437434f1557.jpg",
    description: "Stunning heels for special occasions.",
    material: "Patent Leather",
    size: "5, 6, 7, 8, 9, 10",
    care: "Clean with a damp cloth."
  },
  {
    id: 16,
    name: "Women's Sunglasses",
    price: "$35",
    image: "https://i.pinimg.com/564x/18/98/fe/1898fee9d41443ef2507fad27ffc035e.jpg",
    description: "Fashionable sunglasses for every day.",
    material: "Plastic",
    size: "One Size",
    care: "Store in a protective case."
  },
];

export default function ProductDetails({ params }) {
  const { id } = params; // Get the dynamic id
  const [product, setProduct] = useState(null);
  const [notification, setNotification] = useState(false); // State to manage notification visibility

  useEffect(() => {
    // Simulate fetching the product from an API or data source
    const fetchedProduct = products.find((product) => product.id === parseInt(id));
    setProduct(fetchedProduct);
  }, [id]);

  const handleAddToCart = () => {
    setNotification(true); // Show the notification
    setTimeout(() => {
      setNotification(false); // Hide notification after 3 seconds
    }, 3000);
  };

  if (!product) {
    return <p>Loading...</p>;
  }


  return (
    <div className="container mx-auto py-10">
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded shadow-lg">
          Added to Cart!
        </div>
      )}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold">{product.name}</h1>
        <Link href="/women">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Back to Women's Collection
          </button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/3 h-auto rounded-lg shadow-lg"
        />
        <div className="w-full md:w-2/3">
          <h2 className="text-6xl font-bold mb-4">Price: {product.price}</h2>
          <p className="text-5xl leading-snug mb-8">{product.description}</p>
          <ul className="text-5xl leading-snug mb-8 space-y-4">
            <li><strong>Material:</strong> {product.material}</li>
            <li><strong>Available Sizes:</strong> {product.size}</li>
            <li><strong>Care Instructions:</strong> {product.care}</li>
          </ul>
          <button
            className="w-full bg-pink-600 text-white py-4 rounded-lg hover:bg-pink-700 transition duration-300 text-5xl"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
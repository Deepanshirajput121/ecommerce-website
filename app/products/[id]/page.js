"use client"; // This directive makes the component a Client Component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../../src/Components/CartContext';


// Sample product data for demonstration
const products = [

  {
    id: 1,
    name: "Men's Casual T-Shirt",
    price: "$20",
    image: "https://i.pinimg.com/564x/b9/f2/7e/b9f27ed3b11c7ef0d765fd9a65c2753a.jpg",
    description: "This comfortable and stylish T-shirt is made from 100% cotton, perfect for casual outings. Available in multiple colors, it’s a must-have for any wardrobe.",
    material: "100% Cotton",
    size: "S, M, L, XL",
    care: "Machine Wash"
  },
  {
    id: 2,
    name: "Men's Slim Fit Jeans",
    price: "$40",
    image: "https://i.pinimg.com/736x/3d/47/b3/3d47b329159ea3953a6ca29084fd1912.jpg",
    description: "These slim-fit jeans provide a modern, tapered look. Made with stretch denim for ultimate comfort. Pair with a casual shirt or jacket for a stylish look.",
    material: "Denim, 98% Cotton, 2% Spandex",
    size: "28, 30, 32, 34, 36",
    care: "Machine Wash"
  },
  {
    id: 3,
    name: "Men's Leather Jacket",
    price: "$60",
    image: "https://i.pinimg.com/564x/a1/e2/50/a1e250f744459f2c46d5a6f8b538a7fe.jpg",
    description: "A classic black leather jacket that adds an edge to your style. Perfect for chilly evenings, it's designed with a zip closure and multiple pockets for practicality.",
    material: "Genuine Leather",
    size: "M, L, XL",
    care: "Dry Clean Only"
  },
  {
    id: 4,
    name: "Men's Casual Sneakers",
    price: "$50",
    image: "https://i.pinimg.com/564x/f4/f4/a7/f4f4a7d614e1f1733b6486a99a060470.jpg",
    description: "Comfortable, breathable sneakers perfect for everyday wear. The sleek design ensures a snug fit, while the durable rubber sole provides traction and support.",
    material: "Synthetic Mesh Upper, Rubber Sole",
    size: "7, 8, 9, 10, 11",
    care: "Wipe with damp cloth"
  },
  {
    id: 5,
    name: "Men's T-Shirt",
    price: "$20",
    image: "https://i.pinimg.com/564x/07/02/97/07029788140113fdcc373fe97b3158f7.jpg",
    description: "Comfortable, breathable sneakers perfect for everyday wear. The sleek design ensures a snug fit, while the durable rubber sole provides traction and support.",
    material: "Synthetic Mesh Upper, Rubber Sole",
    size: "7, 8, 9, 10, 11",
    care: "Wipe with damp cloth"
  },
  {
    id: 6,
    name: "Men's Jeans",
    price: "$40",
    image: "https://i.pinimg.com/736x/1d/75/ce/1d75cef460cb9a443c34f6fb5d102914.jpg",
    description: "Comfortable, breathable sneakers perfect for everyday wear. The sleek design ensures a snug fit, while the durable rubber sole provides traction and support.",
    material: "Synthetic Mesh Upper, Rubber Sole",
    size: "7, 8, 9, 10, 11",
    care: "Wipe with damp cloth"
  },
  {
    id: 7,
    name: "Men's Jacket",
    price: "$60",
    image: "https://i.pinimg.com/564x/29/87/61/2987615d7a403ea28ea2b24521907d7a.jpg",
    description: "Comfortable, breathable sneakers perfect for everyday wear. The sleek design ensures a snug fit, while the durable rubber sole provides traction and support.",
    material: "Synthetic Mesh Upper, Rubber Sole",
    size: "7, 8, 9, 10, 11",
    care: "Wipe with damp cloth"
  },
  {
    id: 8,
    name: "Men's Sneakers",
    price: "$50",
    image: "https://i.pinimg.com/564x/c3/a2/9e/c3a29ecfdd0f0a1c827b36344e1a1a40.jpg",
    description: "Comfortable, breathable sneakers perfect for everyday wear. The sleek design ensures a snug fit, while the durable rubber sole provides traction and support.",
    material: "Synthetic Mesh Upper, Rubber Sole",
    size: "7, 8, 9, 10, 11",
    care: "Wipe with damp cloth"
  },
  {
    id: 9,
    name: "Men's T-Shirt",
    price: "$20",
    image: "https://i.pinimg.com/564x/eb/93/42/eb934256a03c50ceaa42ea7f4cfae0c1.jpg",
    description: "Comfortable, breathable sneakers perfect for everyday wear. The sleek design ensures a snug fit, while the durable rubber sole provides traction and support.",
    material: "Synthetic Mesh Upper, Rubber Sole",
    size: "7, 8, 9, 10, 11",
    care: "Wipe with damp cloth"

  },
  {
    id: 10,
    name: "Men's Jeans",
    price: "$40",
    image: "https://i.pinimg.com/564x/43/c7/04/43c704dcb179532d88b33bddf7a9efda.jpg",
    description: "Comfortable, breathable sneakers perfect for everyday wear. The sleek design ensures a snug fit, while the durable rubber sole provides traction and support.",
    material: "Synthetic Mesh Upper, Rubber Sole",
    size: "7, 8, 9, 10, 11",
    care: "Wipe with damp cloth"
  },
  {
    id: 11,
    name: "Men's Jacket",
    price: "$60",
    image: "https://i.pinimg.com/564x/6c/67/68/6c67683f6fd68b0be3c5f550a6ccc3b0.jpg",
    description: "Comfortable, breathable sneakers perfect for everyday wear. The sleek design ensures a snug fit, while the durable rubber sole provides traction and support.",
    material: "Synthetic Mesh Upper, Rubber Sole",
    size: "7, 8, 9, 10, 11",
    care: "Wipe with damp cloth"
  },
  {
    id: 12,
    name: "Men's Sneakers",
    price: "$50",
    image: "https://i.pinimg.com/564x/58/6c/23/586c230ded005b992a014eb0f8f7d1df.jpg",
    description: "Comfortable, breathable sneakers perfect for everyday wear. The sleek design ensures a snug fit, while the durable rubber sole provides traction and support.",
    material: "Synthetic Mesh Upper, Rubber Sole",
    size: "7, 8, 9, 10, 11",
    care: "Wipe with damp cloth"
  },
  {
    id: 13,
    name: "Men's T-Shirt",
    price: "$20",
    image: "https://i.pinimg.com/564x/80/19/7f/80197f2448bb4e041a9efb4ed0a0419d.jpg",
    description: "Comfortable, breathable sneakers perfect for everyday wear. The sleek design ensures a snug fit, while the durable rubber sole provides traction and support.",
    material: "Synthetic Mesh Upper, Rubber Sole",
    size: "7, 8, 9, 10, 11",
    care: "Wipe with damp cloth"
  },
  {
    id: 14,
    name: "Men's Jeans",
    price: "$40",
    image: "https://i.pinimg.com/564x/94/60/84/946084697639ef542dc934319180a28a.jpg",
    description: "Comfortable, breathable sneakers perfect for everyday wear. The sleek design ensures a snug fit, while the durable rubber sole provides traction and support.",
    material: "Synthetic Mesh Upper, Rubber Sole",
    size: "7, 8, 9, 10, 11",
    care: "Wipe with damp cloth"
  },
  {
    id: 15,
    name: "Men's Jacket",
    price: "$60",
    image: "https://i.pinimg.com/564x/5a/11/79/5a11799fdb6eecc86a2ad144a7b200bc.jpg",
    description: "Comfortable, breathable sneakers perfect for everyday wear. The sleek design ensures a snug fit, while the durable rubber sole provides traction and support.",
    material: "Synthetic Mesh Upper, Rubber Sole",
    size: "7, 8, 9, 10, 11",
    care: "Wipe with damp cloth"
  },
  {
    id: 16,
    name: "Men's Sneakers",
    price: "$50",
    image: "https://i.pinimg.com/564x/ff/ab/ef/ffabef13b1263e271f4f818c48207e0c.jpg",
    description: "Comfortable, breathable sneakers perfect for everyday wear. The sleek design ensures a snug fit, while the durable rubber sole provides traction and support.",
    material: "Synthetic Mesh Upper, Rubber Sole",
    size: "7, 8, 9, 10, 11",
    care: "Wipe with damp cloth"
  }
];

export default function ProductDetails({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); // Access the addToCart function from context
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    const fetchedProduct = products.find((product) => product.id === parseInt(id));
    setProduct(fetchedProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Add product to cart using context
      setNotification(true);
      setTimeout(() => setNotification(false), 3000);
    }
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div> {/* Spinner loader */}
      </div>
    );
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
        <Link href="/men">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Back to Men's Collection
          </button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/3 h-auto rounded-lg shadow-lg" // Adjusted width here
        />
        <div className="w-full md:w-2/3"> {/* Adjusted width for the text container */}
          <h2 className="text-6xl font-bold mb-4">Price: {product.price}</h2>
          <p className="text-5xl leading-snug mb-8">{product.description}</p>
          <ul className="text-5xl leading-snug mb-8 space-y-4">
            <li><strong>Material:</strong> {product.material}</li>
            <li><strong>Available Sizes:</strong> {product.size}</li>
            <li><strong>Care Instructions:</strong> {product.care}</li>
          </ul>

          <div>
            <button
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-4xl hover:bg-blue-700 transition duration-300 mt-4"
              onClick={handleAddToCart} // Add the click handler here
            >
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
export default function ProductList() {
    const products = [
      { id: 1, name: 'Product 1', price: '$20', imageUrl: '/images/product1.jpg' },
      { id: 2, name: 'Product 2', price: '$30', imageUrl: '/images/product2.jpg' },
      { id: 3, name: 'Product 3', price: '$40', imageUrl: '/images/product3.jpg' },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg">
            {/* <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4" /> */}
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-xl font-bold text-green-600">{product.price}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Add to Cart</button>
          </div>
        ))}
      </div>
    );
  }
  
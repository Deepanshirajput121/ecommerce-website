import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section 
        className="hero-section bg-gray-100 py-10 bg-cover bg-center h-[80vh]" 
        style={{ backgroundImage: "url('/images/ing.png')" }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-slate-800">Welcome to Our Online Store</h1>
          <p className="text-lg text-slate-800">Find the best products at the best prices!</p>
          <a 
            href="/shop" 
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="categories-section py-10 bg-slate-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Shop by Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="category-item bg-gray-200 p-6 rounded-lg text-center">
              <img src="https://i.pinimg.com/736x/c2/03/0c/c2030c0f63634d928130d6a145364acc.jpg" alt="Men's Clothing" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800">Men's Clothing</h3>
            </div>
            <div className="category-item bg-gray-200 p-6 rounded-lg text-center">
              <img src="https://i.pinimg.com/564x/3b/8c/69/3b8c6930de0e77c5cdcc95702d98d637.jpg" alt="Women's Clothing" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800">Women's Clothing</h3>
            </div>
            <div className="category-item bg-gray-200 p-6 rounded-lg text-center">
              <img src="https://i.pinimg.com/564x/0d/3e/7a/0d3e7aeebf321d4c203a8196fc49396d.jpg" alt="Electronics" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800">Electronics</h3>
            </div>
            <div className="category-item bg-gray-200 p-6 rounded-lg text-center">
              <img src="https://i.pinimg.com/564x/91/39/16/913916b819d4121f1a0c523865d5902a.jpg" alt="Accessories" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800">Accessories</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section py-10 bg-slate-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="product-item bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/300" alt="Product 1" className="w-full h-64 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Product 1</h3>
              <p className="text-gray-600 mb-4">A great product for everyday use.</p>
              <p className="text-lg font-bold">$49.99</p>
            </div>
            <div className="product-item bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/300" alt="Product 2" className="w-full h-64 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Product 2</h3>
              <p className="text-gray-600 mb-4">Top-rated for its quality and price.</p>
              <p className="text-lg font-bold">$29.99</p>
            </div>
            <div className="product-item bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/300" alt="Product 3" className="w-full h-64 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">Product 3</h3>
              <p className="text-gray-600 mb-4">Limited time offer, get it now!</p>
              <p className="text-lg font-bold">$79.99</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

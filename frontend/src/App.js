import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from '../Components/CartContext';
import ProductsList from '../../src/Components/ProductsList';  // Ensure this path is correct
import ProductDetails from '../../src/Components/ProductDetails'; // Ensure this path is correct
import CartPage from '../app/cart/page'; // Yahan aapka CartPage import ho raha hai

function App() {
    return (
        <CartProvider>
            <div className="App">
                <h1 className="text-center text-2xl font-bold mb-4">My Shop</h1>
                <Router>
                    <Switch>
                        <Route path="/" exact component={ProductsList} />
                        <Route path="/products/:id" component={ProductDetails} />
                        <Route path="/cart" component={CartPage} /> {/* CartPage ko sahi route diya gaya hai */}
                    </Switch>
                </Router>
            </div>
        </CartProvider>
    );
}

export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ProductsList} />
                <Route path="/products/:id" component={ProductDetails} />
            </Switch>
        </Router>
    );
}

export default App;

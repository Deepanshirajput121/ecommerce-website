import React, { useState } from "react";

const Filters = ({ products, setFilteredProducts }) => {
    const [categoryFilter, setCategoryFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState([0, 2000]);

    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value);
        filterProducts(e.target.value, priceFilter);
    };

    const handlePriceChange = (e) => {
        const value = e.target.value;
        const newPriceFilter = [0, value];
        setPriceFilter(newPriceFilter);
        filterProducts(categoryFilter, newPriceFilter);
    };

    const filterProducts = (category, price) => {
        const filtered = products.filter(product => {
            const isCategoryMatch = category ? product.category === category : true;
            const isPriceMatch = product.price >= price[0] && product.price <= price[1];
            return isCategoryMatch && isPriceMatch;
        });
        setFilteredProducts(filtered);
    };

    return (
        <div className="flex space-x-4">
            <select
                value={categoryFilter}
                onChange={handleCategoryChange}
                className="px-4 py-2 border rounded-md shadow-sm"
            >
                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Accessories">Accessories</option>
            </select>
            <input
                type="range"
                min="0"
                max="2000"
                value={priceFilter[1]}
                onChange={handlePriceChange}
                className="w-full"
            />
            <div className="text-sm">Max Price: ${priceFilter[1]}</div>
        </div>
    );
};

export default Filters;

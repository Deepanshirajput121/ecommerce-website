// Seed data for inventory
const seedInventory = async () => {
    await Inventory.create([
        { item: 'Laptop', stock: 10, price: 50000 },
        { item: 'Headphones', stock: 15, price: 1500 },
        { item: 'Keyboard', stock: 20, price: 1200 }
    ]);
    console.log("Inventory data seeded.");
};
seedInventory();

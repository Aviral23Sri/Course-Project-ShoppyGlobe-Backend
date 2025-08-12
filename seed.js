const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        await Product.deleteMany();
        await Product.insertMany([
            { name: 'Laptop', price: 75000, description: 'Gaming Laptop', stock: 10 },
            { name: 'Smartphone', price: 40000, description: 'Flagship Phone', stock: 20 }
        ]);
        console.log("Products Seeded");
        process.exit();
    })
    .catch(err => console.log(err));

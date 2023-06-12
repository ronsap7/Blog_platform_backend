const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGO DB connected: ${conn.connection.name}`.cyan);
};

module.exports = connectDB;
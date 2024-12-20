const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://asaadhussain:asaadbhai123@cluster0.djs8l.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to DB");

        const fetchedData = mongoose.connection.db.collection("food_items");

        const data = await fetchedData.find({}).toArray();

        const foodCategory = mongoose.connection.db.collection("foodCategory");

        const catData = await foodCategory.find({}).toArray();

        global.food_items = data;
        global.foodCategory = catData;
        

    } catch (e) {
        console.log("Error connecting to DB:", e);
    }
}

module.exports = connectDB;

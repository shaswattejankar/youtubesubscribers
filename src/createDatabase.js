const mongoose = require('mongoose');
const subscriberModel = require('./models/subscribers');
const data = require('./data');
const dotenv = require("dotenv").config();

// Connect to DATABASE
const DATABASE_URL = process.env.DATABASE_URL;

// Deprecated form:
// mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(DATABASE_URL, {serverSelectionTimeoutMS:3000})
.then( ()=> {
    console.log('connected to MongoDb Atlas database');
}).catch( (error)=>{
    console.log(error);
});

// clear the database and add from data.js to Atlas DB
const refreshAll = async () => {
    await subscriberModel.deleteMany({});
    await subscriberModel.insertMany(data);
    console.log("Subscribers database created successfully!");
    await mongoose.disconnect();
}
refreshAll()
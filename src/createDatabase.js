const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')

// Connect to DATABASE
const DATABASE_URL = "mongodb://127.0.0.1/subscribers";

// mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection
// db.on('error', (err) => console.log(err))
// db.once('open', () => console.log('Database created...'))

mongoose.connect(DATABASE_URL, {serverSelectionTimeoutMS:3000})
.then( ()=> {
    console.log('connected to MongoDb database');
}).catch( (error)=>{
    console.log(error);
})


const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    console.log("Subscribers database created successfully!");
    await mongoose.disconnect();
}
refreshAll()
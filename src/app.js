const express = require("express");
const app = express();

// Your code goes here

// METHODS / APIs :-

// 1. GET https://localhost:3000/subscribers  for array of subscribers(an Object)
// 2. GET https://localhost:3000/subscribers/names for array of subscribers (Object with only names and Subscribed Channel)
// 3. GET https://localhost:3000/subscribers/:id for subscriber with given id(an Object) AND for not found -- staus:400 and error message: {message:error.message}

const Subscribers = require("./models/subscribers");

app.get("/subscribers", async (req, res) => {
    try {
        const allSubscribers = await Subscribers.find();
        res.status(200).json(allSubscribers, null, 2);
    } catch (err) {
        res.status(400).json({
            status: "404",
            message: "ERR :" + err.message,
        });
    }
});

app.get("/subscribers/names", async (req, res) => {
    try {
        const subscriberNamesAndChannels = await Subscribers.find(
        {},
        { _id: 0, name: 1, subscribedChannel: 1 }
        );
            res.status(200).json(subscriberNamesAndChannels, null, 2);
    } catch (err) {
        res.status(400).json({
            status: "404",
            message: "ERR :" + err.message,
        });
    }
});

app.get("/subscribers/:id", async (req, res) => {
    try {
        const matchedSubscriber = await Subscribers.findOne({ _id: req.params.id });
        if(matchedSubscriber){
            res.status(200).json(matchedSubscriber, null, 2);
        }else{
            res.status(404).json({
                status:"400",
                message:"data not found <> invalid request message"
            })
        }
    } catch (err) {
        res.status(404).json({
                status: "404",
                message: "ERR : Not of type ObjectId. " + err.message,
            });
    }
});

module.exports = app;
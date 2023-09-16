const express = require("express");
const app = express();

// Your code goes here

const Subscribers = require("./models/subscribers");

// METHODS / APIs :-

// 1. GET https://localhost:3000/subscribers  for array of subscribers(an Object)
app.get("/subscribers", async (req, res) => {
  try {
    const allSubscribers = await Subscribers.find();
    if (allSubscribers.length > 0) {
      res.status(200).json(allSubscribers);
    } else {
      res.status(204).json({
        status: "204",
        message: "data not found!",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "400",
      message: "ERR :" + err.message,
    });
  }
});

// 2. GET https://localhost:3000/subscribers/names for array of subscribers (Object with only names and Subscribed Channel)
app.get("/subscribers/names", async (req, res) => {
  try {
    const subscriberNamesAndChannels = await Subscribers.find(
      {},
      { _id: 0, name: 1, subscribedChannel: 1 }
    );
    res.status(200).json(subscriberNamesAndChannels);
  } catch (err) {
    res.status(400).json({
      status: "404",
      message: "ERR :" + err.message,
    });
  }
});

// 3. GET https://localhost:3000/subscribers/:id for subscriber with given id(an Object) AND for not found -- staus:400 and error message: {message:error.message}
app.get("/subscribers/:id", async (req, res) => {
  try {
    const matchedSubscriber = await Subscribers.findOne({ _id: req.params.id });
    if (matchedSubscriber) {
      res.status(200).json(matchedSubscriber);
    } else {
      throw { message: "data not found. id does not match" };
    }
  } catch (err) {
    res.status(400).json({
      status: "400",
      message: err.message,
    });
  }
});

//redirect to API schema Documentation
app.get("/api-schema-docs", async (req, res) => {
  res.redirect("https://documenter.getpostman.com/view/29625170/2s9YC4VYRw");
});

module.exports = app;

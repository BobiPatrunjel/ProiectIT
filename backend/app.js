// imports
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

// app
const app = express();


// database
mongoose.connect("mongodb://127.0.0.1:27017/proba-it")
    .then(() => {
        console.log("s-a conectat la baza de date");
    })
    .catch(error => console.error(error));

app.use(morgan("dev"));
app.use(cors({
    origin: true,
    credentials: true
}))

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`serverul ruleaza pe portul ${port}`);
})
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const router = require('./routes/workout.js')
const userrouter = require('./routes/user.js')
const ConnectionString = 'mongodb://localhost:27017/MERN'
const express = require("express")
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", router);
app.use("/user", userrouter);

mongoose.connect(ConnectionString)
    .then(() => {
        app.listen(5000, () => {
            console.log("Connected To DataBase")
        })
    })
    .catch((error) => {
        console.log("failed")
    })





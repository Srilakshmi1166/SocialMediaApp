require("dotenv").config();
const express = require("express");
const app = express();
const path = require('path');
const mongoose=require('mongoose');


const userroute = require('./server/routes/user');
const postroute = require('./server/routes/post');


mongoose.connect(process.env.dbURL)
.then(console.log("Connected to Database!!"))
.catch(error => console.log(error));

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public', 'index.html')));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use('/user',userroute);
app.use('/post',postroute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));



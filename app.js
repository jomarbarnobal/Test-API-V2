const express = require('express');
const mongoose = require('mongoose');
const app = express();

const faker = require('faker');

const productRouter = require('./routes/products');
const flowerRouter = require('./routes/flowers');
const dbURI = 'mongodb+srv://reymart:detramier22@cluster0.y61bu.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(results =>app.listen(3000, (req,res) => {
        console.log("server listening on port 3000... and connected to MongoDB")
    }))
    .catch(err => console.log(err))

//middleware
// app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/flowers', flowerRouter);
app.use('/api/products', productRouter);

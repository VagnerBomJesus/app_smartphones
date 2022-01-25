require('dotenv').config();
// app.js
const express = require('express'); 

const smartphones = require('./routes/smartphones.route');

// initialize our express app
const app = express();
//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', smartphones);

//Acesso à BD
const mongoose = require('mongoose');
let url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
const options = {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.Promise = global.Promise;
const mongo = mongoose.connect(url, options);
mongo.then(() => {
  console.log('Conectados a ' + process.env.DB_NAME + ' com Sucesso!');
}, err => {
  console.log(err, 'Error');
});

let  port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
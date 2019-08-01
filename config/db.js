const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Rento';

const connect = mongoose.connect(url, { useNewUrlParser: true });


connect.then((db) =>{
    console.log('connected correctly to server...');
}, (err) => {console.log(err);});

module.exports = {
    secret : '12345678'
};

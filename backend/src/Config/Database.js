const mongoose = require('mongoose');
require("colors")

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true
    })
    .then(result => {
        console.log('MongoDB Conectado'.green);
    })
    .catch(error => {
        console.log(error);
    });
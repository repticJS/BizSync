const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

    ID: {
        type: String
    },
    Name: {
        type: String
    },
    Credentials: {
        type: Object
    },
    Activity: {
        type: Object
    }

})

const model = new mongoose.model('User', Schema);

module.exports = model;
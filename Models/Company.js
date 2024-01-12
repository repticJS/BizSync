const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

    ID: {
        type: String
    },
    Name: {
        type: String
    },
    Logo: {
        type: String
    },
    Description: {
        type: String
    },
    Users: {
        type: Array
    },
    Clients: {
        type: Array
    },
    PaymentMethods: {
        type: Array
    }

})

const model = new mongoose.model('Company', Schema);

module.exports = model;
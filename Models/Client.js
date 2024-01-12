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
    Company: {
        type: String
    },
    ContactDetails: {
        type: Object
    },
    Invoices: {
        type: Array
    }

})

const model = new mongoose.model('Client', Schema);

module.exports = model;
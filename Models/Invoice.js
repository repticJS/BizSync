const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

    ID: {
        type: String
    },
    Client: {
        type: String
    },
    Company: {
        type: String
    },
    Items: {
        type: Array
    },
    Date: {
        type: Object
    },
    Vat: {
        type: Object
    },
    Status: {
        type: Object
    },
    Styling: {
        type: Object
    }

})

const model = new mongoose.model('Invoice', Schema);

module.exports = model;
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

    ID: {
        type: String
    },
    Company: {
        type: String
    },
    User: {
        type: String
    },
    InvitedBy: {
        type: String
    },
    ExpireDate: {
        type: String
    }

})

const model = new mongoose.model('Invite', Schema);

module.exports = model;
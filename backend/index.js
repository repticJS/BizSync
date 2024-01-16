const express = require('express');
require('dotenv').config();
const app = express();

// Important
const { ConnectToDatabase, ConnectToClient, ImportantOptions } = require('./utils/Important');
ConnectToClient(app)
ImportantOptions(app, express)
ConnectToDatabase()

// Default Routes ( No Auth )
const IndexRoute = require('./routes')
app.use('/', IndexRoute)
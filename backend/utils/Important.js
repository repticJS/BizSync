const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

async function ConnectToDatabase() {
 
    mongoose.connect(process.env.MONGODB_SRV, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then (()=> {
    console.log('Connected To DB')
    }).catch((err)=> {
    console.log(err);
    })

}

async function ImportantOptions(app, express) {

    // Cors
    app.use(cors({
        origin: '*'
    }));

    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);
    app.use(express.static("public"));
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

}

async function ConnectToClient(app) {

    app.listen(process.env.PORT || 25580, () => console.log('app is on!'))

}

module.exports = { ConnectToDatabase, ConnectToClient, ImportantOptions };
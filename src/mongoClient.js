// Set up mongoose connection
const mongoose = require('mongoose');
const dev_db_url = 'mongodb://127.0.0.1:27017/mydb';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
mongoose.connect(mongoDB,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
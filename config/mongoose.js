// require  mongoose library
const mongoose = require('mongoose');

//connecting to database
// mongodb+srv://Dnyaneshpatil:<password>@cluster0.xc7nt.mongodb.net/my firstdatabaseserver?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://Dnyaneshpatil:SQ5vBD5KdvVyE+E@cluster0.xc7nt.mongodb.net/Tracker_issue?retryWrites=true&w=majority');

// aquire the connection
const db = mongoose.connection;

// if error occurs
db.on('error', console.error.bind(console, "Error in connecting to DataBase"));

// if running then print message

db.once('open', function(){
    console.log('Connected to database successfully')
});

// export the database
module.exports = db;
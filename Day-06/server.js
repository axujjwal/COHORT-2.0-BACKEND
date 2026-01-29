const app = require('./src/app');
const mongoose = require('mongoose');


function connectDB(){
    mongoose.connect('mongodb+srv://axujjwal_db_user:q01lHXUZMXqhOO6d@cluster0.ymwbilj.mongodb.net/Day-06')
    .then(() => {
        console.log('Connected to server');
    })
} 

connectDB();

app.listen(3000, () => {
    console.log('Server is running on ports 3000');
})
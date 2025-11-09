const express = require('express');
const connectionDB = require('./src/config/dbconnection')
const app = express();
const appRoute = require('./app');

app.use(express.json());

connectionDB();

app.use('/api',appRoute);

port = process.env.PORT || 5000;

app.listen(port,() => {
    try { 
        console.log(`server is running on port ${port}`);
        
    } catch (error) {
        console.error("error");
        
    }
   
});
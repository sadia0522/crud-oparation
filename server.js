const express = require('express');
const connectionDB = require('./src/config/dbconnection')
const app = express();
const appRoute = require('./app');
const {PORT} = require('./src/config/envConfig');

app.use(express.json());

connectionDB();

app.use('/api',appRoute);



app.listen(PORT , () => {
    try { 
        console.log(`server is running on port ${PORT}`);
        
    } catch (error) {
        console.error("error");
        
    }
   
});
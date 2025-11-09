const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectionDB = async function() {
    try {
        mongoose.connect(process.env.MONGOOSE_URI);
        console.log('mongoose connected sucessfully');
        
        
    } catch (error) {
        console.error('there is an server side error');
        
    }
};
module.exports = connectionDB;
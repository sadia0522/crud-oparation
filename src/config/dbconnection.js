const mongoose = require("mongoose");
const { MONGOOSE_URI } = require("./envConfig");

const connectionDB = async function () {
  try {
    await mongoose.connect(MONGOOSE_URI);
    console.log("mongoose connected sucessfully");
  } catch (error) {
    console.error("there is an server side error");
  }
};
module.exports = connectionDB;

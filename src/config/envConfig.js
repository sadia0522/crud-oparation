const dotenv = require("dotenv").config();

const PORT = process.env.PORT;
const MONGOOSE_URI = process.env.MONGOOSE_URI;
module.exports = { PORT, MONGOOSE_URI };

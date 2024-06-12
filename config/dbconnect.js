const { default: mongoose } = require("mongoose");

const dbconnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log("db connected");
    } catch (error) {
        console.log("db error");
    }
};
module.exports = dbconnect;
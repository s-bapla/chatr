const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('mongoDB connected')
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = connectDatabase;
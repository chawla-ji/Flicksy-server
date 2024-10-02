const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri =
    process.env.MONGO_URI;
    try {
        const connection = mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        console.log(`MongoDB connected: ${connection}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

const mongoose = require('mongoose')

const connectDB = async () => {
try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

    console.log(`MongoDb Connected: ${conn.connection.host}`.cyan.underline.bold)
} catch (error) {
    console.log(`Error: ${err.message}`.red.bold)
    process.exit(1)
}
}

module.exports = connectDB;
const mongoose = require('mongoose')

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_CNN)

        console.log('Database online');

    } catch (error) {
        console.log(error);
        throw new Error('Error failed to initialize database')
    }

}

const connDB = async () => {
    await dbConnection()
}

module.exports = { connDB }
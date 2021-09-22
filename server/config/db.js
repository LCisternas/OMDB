const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB ON');
  } catch (error) {
    console.log('ERROR -->', error);
    process.exit(1);
  }
}

module.exports = connectDB;
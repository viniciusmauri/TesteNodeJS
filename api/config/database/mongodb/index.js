const mongoose = require('mongoose');

module.exports = {
  connect: async () => {
    try {
      await mongoose.connect(`mongodb://localhost:21017/testenodejs`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
    } catch (error) {
      console.error('Error: ', error);
      throw error;
    }
  },
};

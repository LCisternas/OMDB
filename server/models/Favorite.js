const mongoose = require('mongoose');

const FavoriteSchema = mongoose.Schema({

  title: {
    type: String,
  },
  poster: {
    type: String
  },
  movieID: {
    type: String
  },
  user_id: {
    type: String
  }

})

module.exports = mongoose.model('Favorite', FavoriteSchema);
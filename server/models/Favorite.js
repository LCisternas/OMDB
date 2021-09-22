const mongoose = require('mongoose');

const FavoriteSchema = mongoose.Schema({

  title: {
    type: String,
  },
  poster: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }

})

module.exports = mongoose.model('Favorite', FavoriteSchema);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  articles: {
    head: [{
      type: Schema.Types.ObjectId,
      ref: 'Article'
    }],
    neck: [{
      type: Schema.Types.ObjectId,
      ref: 'Article'
    }],
    torso: [{
      type: Schema.Types.ObjectId,
      ref: 'Article'
    }],
    legs: [{
      type: Schema.Types.ObjectId,
      ref: 'Article'
    }],
    feet: [{
      type: Schema.Types.ObjectId,
      ref: 'Article'
    }],
    misc: [{
      type: Schema.Types.ObjectId,
      ref: 'Article'
    }],
  }
});

module.exports = mongoose.model('Outfit', userSchema);

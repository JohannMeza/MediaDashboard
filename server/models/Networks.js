const { Schema, model } = require('mongoose');

const networksSchema = new Schema({
  facebook_followers: { type: Number },
  facebook_likes: { type: Number },
  facebook_views: { type: Number },

  twitter_follewers: { type: Number },
  twitter_likes: { type: Number },
  twitter_views: { type: Number },

  instagram_followers: { type: Number },
  instagram_likes: { type: Number },
  instagram_views: { type: Number },

  youtube_followers: { type: Number },
  youtube_likes: { type: Number },
  youtube_views: { type: Number }
},{
  versionKey: false
})

const Networks = model('Networks', networksSchema);

module.exports = Networks
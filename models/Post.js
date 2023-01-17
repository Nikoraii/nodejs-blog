const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    coauthor: {
        type: String,
        required: false
    },
    views: {
      type: Number,
      default: 0
    },
    likes: {
      type: Number,
      default:0
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    content:{
        type: String,
        required: true
    },
    post_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post',
        required: true
    },
    username:{
        type: String,
        required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
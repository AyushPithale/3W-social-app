const mongoose = require( "mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String },
    image: { type: String },
   likesCount: {
      type: Number,
      default: 0
    },
    likedBy: [
      {

      
        userId: {type:mongoose.Schema.Types.ObjectId, ref: "User"},
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User"
      }
    ],
    comments: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        username: String,
        text: String,
        createdAt: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);

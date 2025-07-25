const mongoose = require("mongoose")

const replySchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    votes: {
      upvotes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      downvotes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      score: {
        type: Number,
        default: 0,
      },
    },
    isAccepted: {
      type: Boolean,
      default: false,
    },
    replies: [this], // Self-referencing for nested replies
  },
  {
    timestamps: true,
  },
)

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["question", "discussion", "announcement", "collaboration"],
      default: "discussion",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    category: {
      type: String,
      required: true,
      trim: true,
    },
    isAnswered: {
      type: Boolean,
      default: false,
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
    votes: {
      upvotes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      downvotes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      score: {
        type: Number,
        default: 0,
      },
    },
    replies: [replySchema],
    views: {
      type: Number,
      default: 0,
    },
    lastActivity: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
)

// Index for better search performance
postSchema.index({ title: "text", content: "text" })
postSchema.index({ tags: 1 })
postSchema.index({ category: 1 })
postSchema.index({ createdAt: -1 })
postSchema.index({ lastActivity: -1 })

module.exports = mongoose.model("Post", postSchema)

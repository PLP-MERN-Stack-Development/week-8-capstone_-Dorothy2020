const mongoose = require("mongoose")

const resourceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["video", "pdf", "link", "course", "tutorial", "research-paper"],
      required: true,
    },
    url: String,
    fileUrl: String,
    author: {
      type: String,
      required: true,
      trim: true,
    },
    duration: String,
    difficulty: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
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
    rating: {
      average: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
      count: {
        type: Number,
        default: 0,
      },
      ratings: [
        {
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
          rating: {
            type: Number,
            min: 1,
            max: 5,
          },
          review: String,
          createdAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    downloads: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
)

// Index for better search performance
resourceSchema.index({ title: "text", description: "text", author: "text" })
resourceSchema.index({ tags: 1 })
resourceSchema.index({ category: 1 })
resourceSchema.index({ difficulty: 1 })
resourceSchema.index({ createdAt: -1 })

module.exports = mongoose.model("Resource", resourceSchema)

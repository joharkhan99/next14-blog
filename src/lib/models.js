import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: "",
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const commentSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NextJSUser",
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const NextJSUser =
  mongoose.models.NextJSUser || mongoose.model("NextJSUser", userSchema);
export const NextJSPost =
  mongoose.models.NextJSPost || mongoose.model("NextJSPost", postSchema);
export const NextJSComment =
  mongoose.models.NextJSComment ||
  mongoose.model("NextJSComment", commentSchema);

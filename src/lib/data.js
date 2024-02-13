import { NextJSComment, NextJSPost, NextJSUser } from "./models";
import { connectToDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    await connectToDB();
    const posts = await NextJSPost.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting posts");
  }
};

export const getPost = async (slug) => {
  try {
    await connectToDB();
    const post = await NextJSPost.findOne({ slug: slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting post");
  }
};

export const getUser = async (id) => {
  // this will be a no-store request
  noStore();

  try {
    await connectToDB();
    const user = await NextJSUser.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting user");
  }
};

export const getUsers = async () => {
  try {
    await connectToDB();
    const users = await NextJSUser.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting users");
  }
};

export const getComments = async (postId) => {
  try {
    await connectToDB();
    const comments = await NextJSComment.find({ postId: postId }).populate({
      path: "user",
      select: "-password -email -isAdmin",
    });
    return comments;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting comments");
  }
};

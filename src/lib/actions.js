"use server";

import { NextJSPost, NextJSUser } from "./models";
import { revalidatePath } from "next/cache";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    await connectToDB();
    const newPost = new NextJSPost({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("Post added");

    // this will revalidate the /blog page. It will be updated with the new post
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add post");
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDB();
    await NextJSPost.findByIdAndDelete(id);
    console.log("Post deleted");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add post");
  }
};

export const handleGithubLogin = async (e) => {
  await signIn("github");
};

export const handleGithubLogout = async (e) => {
  await signOut();
};

export const register = async (formData) => {
  const { username, email, image, password, confirmPassword } =
    Object.fromEntries(formData);

  if (password !== confirmPassword) {
    console.log("Passwords do not match!");
    return "Passwords do not match!";
  }

  try {
    connectToDB();

    const user = await NextJSUser.findOne({ username: username });
    if (user) {
      console.log("Username already exists");
      return "Username already exists";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new NextJSUser({
      username,
      email,
      password: hashedPass,
      image,
    });

    await newUser.save();
    console.log("Saved to DB");
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};

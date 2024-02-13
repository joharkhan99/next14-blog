"use server";

import { NextJSPost, NextJSUser } from "./models";
import { revalidatePath } from "next/cache";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);

  try {
    await connectToDB();
    const newPost = new NextJSPost({
      title,
      desc,
      slug,
      userId,
      img,
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

export const addUser = async (prevState, formData) => {
  const { username, email, password, image, isAdmin } =
    Object.fromEntries(formData);

  try {
    await connectToDB();
    const newUser = new NextJSUser({
      username,
      email,
      password,
      image,
      isAdmin,
    });
    await newUser.save();
    console.log("User added");

    // this will revalidate the /blog page. It will be updated with the new post
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user");
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

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDB();
    await NextJSPost.deleteMany({ userId: id });
    await NextJSUser.findByIdAndDelete(id);
    console.log("User deleted");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add User");
  }
};

export const handleGithubLogin = async (e) => {
  await signIn("github");
};

export const handleGithubLogout = async (e) => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, image, password, confirmPassword } =
    Object.fromEntries(formData);

  if (password !== confirmPassword) {
    // console.log("Passwords do not match!");
    return { error: "Passwords do not match!" };
  }

  try {
    connectToDB();

    const user = await NextJSUser.findOne({ username: username });
    if (user) {
      return { error: "Username already exists" };
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
    return { success: true };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    if (error.message.includes("credentialssignin")) {
      return {
        error: "Invalid username or password",
      };
    }

    throw error;
  }
};

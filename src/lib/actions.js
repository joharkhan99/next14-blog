"use server";

import { NextJSPost } from "./models";
import { revalidatePath } from "next/cache";
import { connectToDB } from "./utils";

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

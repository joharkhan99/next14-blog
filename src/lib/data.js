import { NextJSPost, NextJSUser } from "./models";
import { connectToDB } from "./utils";

// temp data
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
  },
];
const posts = [
  {
    id: 1,
    userId: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    userId: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];

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
    const post = await NextJSPost.find({ slug: slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting post");
  }
};

export const getUser = async (id) => {
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

import { addPost } from "@/lib/actions";
import React from "react";

const ServerActionTestPage = () => {
  return (
    <form action={addPost}>
      <input type="text" placeholder="title" name="title" />
      <input type="text" placeholder="desc" name="desc" />
      <input type="text" placeholder="slug" name="slug" />
      <input type="text" placeholder="userId" name="userId" />

      <button>Create</button>
    </form>
  );
};

export default ServerActionTestPage;

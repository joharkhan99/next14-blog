"use client";

import { addPost } from "@/lib/actions";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form className={styles.container} action={formAction}>
      <h1>Add Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="Slug" />
      <input type="text" name="img" placeholder="Image" />
      <textarea type="text" name="desc" placeholder="Description" />
      <button type="submit">Add</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;

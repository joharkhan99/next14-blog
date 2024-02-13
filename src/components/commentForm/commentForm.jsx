"use client";

import { addComment } from "@/lib/actions";
import styles from "./commentForm.module.css";
import { useFormState } from "react-dom";

const CommentForm = ({ postId }) => {
  const [state, formAction] = useFormState(addComment, undefined);
  return (
    <form className={styles.container} action={formAction}>
      <h4>Add Comment</h4>
      <input type="hidden" name="postId" value={postId} />
      <textarea type="text" name="desc" placeholder="Description" rows={10} />
      <button type="submit">Add Comment</button>

      {state?.error}
    </form>
  );
};

export default CommentForm;

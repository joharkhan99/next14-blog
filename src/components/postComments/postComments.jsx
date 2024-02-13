import { getComments } from "@/lib/data";
import styles from "./postComments.module.css";

const PostComments = async ({ postId }) => {
  const comments = await getComments(postId);

  return (
    <div className={styles.container}>
      {comments.map((comment) => (
        <div className={styles.comment} key={comment.id}>
          <div className={styles.detail}>
            <div>
              <span className={styles.commentTitle}>
                {comment.user.username}
              </span>
              <span className={styles.commentDate}>
                {comment.createdAt.toString()}
              </span>
            </div>
            <span className={styles.commentText}>{comment.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostComments;

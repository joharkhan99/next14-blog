import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import PostComments from "@/components/postComments/postComments";
import CommentForm from "@/components/commentForm/commentForm";
import { auth } from "@/lib/auth";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    // revalidate every 60 seconds
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  // const post = await getPost(slug);
  const post = await getData(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params, searchParams }) => {
  const { slug } = params;
  const post = await getData(slug);
  const session = await auth();

  return (
    <>
      <div className={styles.container}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.img} />
          </div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.detail}>
            {post && (
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post.userId} />
              </Suspense>
            )}

            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>{post?.createdAt}</span>
            </div>
          </div>
          <div className={styles.content}>{post?.desc}</div>
        </div>

        {/* add comment section */}
      </div>

      <div className={styles.comments}>
        <h2>Comments</h2>
        {session?.user && <CommentForm postId={post._id} />}
        <PostComments postId={post._id} />
      </div>
    </>
  );
};

export default SinglePostPage;

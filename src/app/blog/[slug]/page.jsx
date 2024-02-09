import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
/* const getData = async (slug) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
    {
      // revalidate every 60 seconds
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}; */

const SinglePostPage = async ({ params, searchParams }) => {
  const { slug } = params;
  // const post = await getData(slug);
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image
            src="/about.png"
            alt=""
            className={styles.avatar}
            width={50}
            height={50}
          />

          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>11/12/23</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;

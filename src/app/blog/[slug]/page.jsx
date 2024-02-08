import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = ({ params, searchParams }) => {
  console.log("params", params);
  console.log("searchParams", searchParams);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
        <div className={styles.detail}>
          <Image
            src="/about.png"
            alt=""
            className={styles.avatar}
            width={50}
            height={50}
          />

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>John</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>11/12/23</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac odio
          nec justo. Morbi tincidunt, dui sit amet facilisis feugiat, odio metus
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

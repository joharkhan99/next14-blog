import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>11/12/23</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac odio
          nec justo
        </p>
        <Link className={styles.link} href="/">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

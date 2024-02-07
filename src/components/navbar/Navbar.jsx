import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/">Next 14</Link>
      <div>
        <Links />
      </div>
    </div>
  );
}

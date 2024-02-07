import Links from "./links/Links";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div>Next 14</div>
      <div>
        <Links />
      </div>
    </div>
  );
}

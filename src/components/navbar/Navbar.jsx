import { auth } from "@/lib/auth";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/">Next 14</Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
}

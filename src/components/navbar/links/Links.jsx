import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

function Links() {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink key={link.title} item={link} />
      ))}
    </div>
  );
}

export default Links;

import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref>
        <h2 className={styles.navHeader}>Next Routing</h2>
      </Link>
      <ul className={styles.navMenu}>
        <Link href="/users">All Users</Link>
      </ul>
    </nav>
  );
};

export default Navbar;

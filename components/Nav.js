import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <header className={styles["primary-header"]}>
      <div className="container">
        <nav className={styles["primary-nav"]}>
          <Link href="/">
            <Image
              src="/studio-ghibli-logo.svg"
              width="100%"
              height="70%"
              alt="studio ghibli logo"
            />
          </Link>

          <ul className={styles["nav-list"]}>
            <Link href="/">Filmography</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Tickets</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

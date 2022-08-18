import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["primary-footer"]}>
      <div className="container flow-content">
        <Link href="/">
          <Image
            src="/studio-ghibli-logo.svg"
            width="100%"
            height="70%"
            alt="studio ghibli logo"
          />
        </Link>
        <p>2022 Ghiblihub. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

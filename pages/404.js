import Link from "next/link";
import styles from "../styles/404.module.css";

const ErrorPage = () => {
  return (
    <section className={styles["error-page"]}>
      <div className="container flow-content">
        <div>
          <h1 className={styles.title}>404</h1>
          <p className={styles.title}>Oooops!</p>
          <p className={styles.title}>Page Not Found</p>
        </div>
        <div>
          <p>This page does not exist or was removed!</p>
          <p>We suggest you back to home</p>
        </div>
        <Link href="/">
          <a className="btn">Back to Home</a>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;

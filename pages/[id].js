import Image from "next/image";
import styles from "../styles/Details.module.css";
import star from "../public/star.svg";
import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  const data = await response.json();

  const paths = data.map(movie => {
    return { params: { id: movie.id } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const id = context.params.id;
  const response = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
  const data = await response.json();

  return {
    props: { movie: data },
  };
};

const MovieDetails = ({ movie }) => {
  // console.log(movie);

  const banner = movie.movie_banner;
  // console.log(banner);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Ghiblihub | {movie.title}</title>
        <meta name="description" content="Showing details about the movie" />
      </Head>
      <main>
        <section className="container">
          <p className={styles.back} onClick={() => router.push("/")}>
            <span>{"< "} Back</span>
          </p>
          <div
            style={{
              backgroundImage: `url(${banner})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "60vh",
              "box-shadow":
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);",
            }}
          ></div>
          <div className={styles["movie-details"]}>
            <span className={styles.info}>
              {movie.release_date} | {movie.running_time} mins
            </span>
            <h1 className={styles.title}>{movie.title}</h1>
            <p>{movie.description}</p>
            <p className={styles.director}>Directed By: {movie.director}</p>
            <p className={styles.rating}>
              <span>
                <Image src={star} height="25" width="25" alt="star" />
              </span>
              <span className={styles.score}>{movie.rt_score}</span>/100
            </p>
            <Link href="/">
              <a className="btn">Watch Trailer</a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default MovieDetails;

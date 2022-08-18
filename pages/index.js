import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  const data = await response.json();

  return {
    props: { movies: data },
  };
};

// const answers = async () => {
//   const response = await fetch("https://ghibliapi.herokuapp.com/films");
//   const data = await response.json();

//   console.log(data[0]);
//   const images = data.map(item => console.log(item.image));
//   console.log(images);
// };

// answers();

export default function Home({ movies }) {
  return (
    <>
      <Head>
        <title>Ghiblihub | Home</title>
        <meta
          name="description"
          content="Home page display all of Studio Ghibli movies"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="container">
        <section>
          <h1 className="main-heading">Filmography</h1>
          <div className={styles["movie-grid"]}>
            {movies &&
              movies.map(movie => (
                <Link href={`${movie.id}`} key={movie.id}>
                  <div className={styles["movie-card"]}>
                    <h3 className={styles["visually-hidden"]}>{movie.title}</h3>
                    <Image
                      src={movie.image}
                      alt={movie.title}
                      height={594}
                      width={396}
                      objectFit="cover"
                      className={styles["movie-image"]}
                    />
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}

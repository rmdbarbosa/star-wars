import React from "react";
import MovieCard from "../components/MovieCard";
import Image from "next/image";
import Link from "next/link";

export default async function Movies() {
  const res = await fetch("https://swapi.dev/api/films/");
  const data = await res.json();
  const movieArr = [{}];

  // const posters = [
  //   "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
  //   "https://imgc.allpostersimages.com/img/posters/trends-international-24x36-star-wars-attack-of-the-clones-one-sheet_u-L-Q1RG7J80.jpg",
  //   "https://imgc.allpostersimages.com/img/posters/24x36-star-wars-revenge-of-the-sith-one-sheet_u-L-FAAPZF0.jpg",
  //   "https://imgc.allpostersimages.com/img/posters/trends-international-star-wars-a-new-hope-classic-pose_u-L-FAAPZY0.jpg",
  //   "https://imgc.allpostersimages.com/img/posters/24x36-star-wars-the-empire-strikes-back-one-sheet-2-premium-poster_u-L-F9PKE40.jpg",
  //   "https://imgc.allpostersimages.com/img/posters/trends-international-24x36-star-wars-the-return-of-the-jedi-endor_u-L-Q1RG7L90.jpg",
  // ];

  const moviesElement = await data.results
    .sort((a, b) => (a.episode_id > b.episode_id ? 1 : -1))
    .map((movie) => {
      movieArr.push(movie);

      return (
        <Link key={movie.title} href={`/movies/${movie.episode_id}`}>
          {" "}
          <MovieCard {...movie} />{" "}
        </Link>
      );
    });

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <Image src={"/logo.png"} width={200} height={100} alt="movies" />
      <div className="flex flex-wrap justify-center gap-5">{moviesElement}</div>
    </main>
  );
}

import MovieBig from "@/app/components/MovieBig";
import React from "react";

const posters = [
  "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
  "https://imgc.allpostersimages.com/img/posters/trends-international-24x36-star-wars-attack-of-the-clones-one-sheet_u-L-Q1RG7J80.jpg",
  "https://imgc.allpostersimages.com/img/posters/24x36-star-wars-revenge-of-the-sith-one-sheet_u-L-FAAPZF0.jpg",
  "https://imgc.allpostersimages.com/img/posters/trends-international-star-wars-a-new-hope-classic-pose_u-L-FAAPZY0.jpg",
  "https://imgc.allpostersimages.com/img/posters/24x36-star-wars-the-empire-strikes-back-one-sheet-2-premium-poster_u-L-F9PKE40.jpg",
  "https://imgc.allpostersimages.com/img/posters/trends-international-24x36-star-wars-the-return-of-the-jedi-endor_u-L-Q1RG7L90.jpg",
];

export const generateStaticParams = async () => {
  const res = await fetch(`https://swapi.dev/api/films/`);
  const data = await res.json();

  const sortedMovies = data.results.sort((a, b) => a.episode_id - b.episode_id);

  return sortedMovies.map((movie) => ({
    id: movie.episode_id.toString(),
    poster: posters[movie.episode_id - 1],
  }));
};

export default async function MovieInfo({ params }) {
  const res = await fetch(`https://swapi.dev/api/films/${params.id}`);
  const data = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <MovieBig {...data} poster={posters[params.id - 1]} />
    </main>
  );
}

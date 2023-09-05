import MovieBig from "@/app/components/MovieBig";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch(`https://swapi.dev/api/films/`);
  const data = await res.json();
  return data.results.map((data) => ({
    id: toString(data.episode_id),
  }));
};

export default async function MovieInfo({ params }) {
  const res = await fetch(`https://swapi.dev/api/films/${params.id}`);
  const data = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <MovieBig {...data} />
    </main>
  );
}

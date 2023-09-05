import React from "react";
import CharacterCard from "../components/CharacterCard";
import Image from "next/image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";

export default async function Characters() {
  const res = await fetch("https://swapi.dev/api/people/");
  const data = await res.json();

  const charElements = data.results.map((char, index) => {
    return <CharacterCard key={index} {...char} />;
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="flex flex-wrap justify-center gap-5">{charElements}</div>
      <div className="flex justify-center gap-5 mt-2 border">
        <Link href={"/characters/2"}>
          <NavigateNextIcon></NavigateNextIcon>
        </Link>
      </div>
    </main>
  );
}

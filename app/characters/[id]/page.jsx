"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import CharacterCard from "@/app/components/CharacterCard";

export default function clientCharacters() {
  const [url, setUrl] = useState("https://swapi.dev/api/people/?page=2");

  const [newChars, setNewChars] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewChars(data));
  }, [url]);

  const charElements = newChars.results?.map((char, index) => {
    return <CharacterCard key={index} {...char} />;
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <Image src={"/logo.png"} width={200} height={100} alt="chars" />
      <div className="flex flex-wrap justify-center gap-5">{charElements}</div>
      <div className="flex justify-center gap-5 mt-2">
        <button
          className="rotate-180 border flex justify-center"
          disabled={!newChars.previous}
          onClick={() => setUrl(newChars.previous)}
        >
          <NavigateNextIcon></NavigateNextIcon>
        </button>
        <button className="border" onClick={() => setUrl(newChars.next)}>
          <NavigateNextIcon></NavigateNextIcon>
        </button>
      </div>
    </main>
  );
}

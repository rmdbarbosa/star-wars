"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CircularProgress from "@mui/material/CircularProgress";

import CharacterCard from "@/app/components/CharacterCard";

export default function ClientCharacters() {
  const [url, setUrl] = useState("https://swapi.dev/api/people/?page=2");
  const [newChars, setNewChars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setNewChars(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [url]);

  const handlePrevClick = () => {
    if (newChars.previous) {
      setUrl(newChars.previous);
    }
  };

  const handleNextClick = () => {
    if (newChars.next) {
      setUrl(newChars.next);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <Image
        src={"/logo.png"}
        width={200}
        height={100}
        alt="chars"
        unoptimized
      />

      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-5">
            {newChars.results?.map((char, index) => (
              <CharacterCard key={index} {...char} />
            ))}
          </div>
          <div className="flex justify-center gap-5 mt-2">
            <button
              className="rotate-180 border flex justify-center"
              disabled={!newChars.previous}
              onClick={handlePrevClick}
            >
              <NavigateNextIcon></NavigateNextIcon>
            </button>
            <button className="border" onClick={handleNextClick}>
              <NavigateNextIcon></NavigateNextIcon>
            </button>
          </div>
        </>
      )}
    </main>
  );
}

"use client";

import { Avatar } from "@mui/joy";
import { CircularProgress, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function MovieBig({ title, opening_crawl, characters, poster }) {
  const [charArr, setCharArr] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getChars = async () => {
      try {
        const charData = await Promise.all(
          characters.map(async (char) => {
            const res = await fetch(char);
            const data = await res.json();
            return data.name;
          })
        );

        setCharArr(charData);
        setIsLoading(false);
      } catch (err) {
        if (err.name === "AbortError") {
        } else {
          console.error(err);
          setIsLoading(false);
        }
      }
    };

    getChars();

    return () => {
      setIsLoading(false);
    };
  }, [characters, isLoading]);

  return (
    <main className="flex gap-5 flex-col min-h-screen items-center p-6 w-full">
      <div className="mb-4 sm:mb-0 sm:mr-4 lg:mr-8">
        <Image
          src={poster}
          width={600}
          height={800}
          alt={title}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center gap-5 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          {title}
        </h1>
        <Typography level="body-xs" className=" font-bold">
          {opening_crawl}
        </Typography>
      </div>

      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="w-full flex-col">
          <h1 className="font-bold m-5">Related Characters:</h1>
          <ul className="text-slate-600 font-light flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 border-gray-300 p-2">
            {charArr.map((char, index) => (
              <li
                className="border bg-slate-50 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl flex flex-col gap-3 justify-center items-center text-center w-full sm:w-1/5"
                key={index}
              >
                <Avatar />
                {char}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

export default MovieBig;

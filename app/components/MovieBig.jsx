"use client";

import React, { useEffect, useState } from "react";

function MovieBig({ title, opening_crawl, characters }) {
  const [charArr, setCharArr] = useState([]);

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
      } catch (err) {
        console.log(err);
      }
    };
    getChars();
  }, [characters]);

  return (
    <div className="flex">
      <div>
        <img src="/logo.png" alt="star wars img" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{opening_crawl}</p>
        <ul>
          {charArr.map((char, index) => (
            <li key={index}>{char}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieBig;

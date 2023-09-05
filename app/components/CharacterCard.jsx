import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default async function CharacterCard({ name, birth_year, species }) {
  const fetchSpecies = async () => {
    if (species.length > 0) {
      try {
        const res = await fetch(species);
        if (!res.ok) {
          throw new Error("Failed to fetch species data");
        }
        const data = await res.json();
        return data.name;
      } catch (error) {
        console.error("Error fetching species data:", error);
        return "Unknown";
      }
    }
  };

  let specie = await fetchSpecies();

  return (
    <Card sx={{ minHeight: "280px", width: 320 }}>
      <CardCover>
        <img
          src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
          srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
          loading="lazy"
          alt={name}
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography level="title-lg" textColor="#fff">
          {name}
        </Typography>
        <Typography textColor="neutral.300">
          Birth Year: {birth_year}
        </Typography>
        <Typography textColor="neutral.300">
          Species: {species.length > 0 ? specie : "Unknown"}
        </Typography>
      </CardContent>
    </Card>
  );
}

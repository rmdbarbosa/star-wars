import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default async function MovieCard({ title, episode_id }) {
  return (
    <Card sx={{ minHeight: "280px", width: 320 }}>
      <CardCover>
        <img src={"./logo.png"} loading="lazy" alt="beyt" />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography level="title-lg" textColor="#fff">
          Chapter: {episode_id}-{title}
        </Typography>
      </CardContent>
    </Card>
  );
}

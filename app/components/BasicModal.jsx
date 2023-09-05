"use client";

import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

export default function BasicModal({
  name,
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  mass,
  skin_color,
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button color="neutral" onClick={() => setOpen(true)}>
        More info...
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.surface",
            }}
          />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            {name}
          </Typography>

          <ul className="capitalize">
            <li>Birth Year: {birth_year}</li>
            <li>Eye Color: {eye_color}</li>
            <li>Gender: {gender}</li>
            <li>Hair Color: {hair_color}</li>
            <li>Height: {height}</li>
            <li>Mass: {mass}</li>
            <li>Skin Color: {skin_color}</li>
          </ul>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}

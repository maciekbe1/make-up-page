import { useState, forwardRef } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export default function PreviewAlert({ preview }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };
  return (
    <Snackbar
      open={preview}
      onClose={handleClose}
      message="Jesteś w trybie podglądu"
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      action={
        <Button href="/api/exitPreview" color="secondary">
          Wyjdz
        </Button>
      }
    />
  );
}

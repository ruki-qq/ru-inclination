import React from "react";
import { Typography, Box } from "@mui/material";

const Output = ({ result }) => {
  return (
    <Box sx={{ paddingTop: 2 }}>
        <Typography variant="h5">Результат:</Typography>
      <Typography variant="h6" sx={{ textAlign: "center", marginTop: 1}}>{result}</Typography>
    </Box>
  );
};

export default Output;

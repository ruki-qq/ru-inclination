import React, { useState } from "react";
import { Stack } from "@mui/material";
import useInclination from "../hooks/useInclination";
import Form from "./Form";
import Output from "./Output";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [padezh, setPadezh] = useState("");
  const [res, incline] = useInclination();
  const handleInput = (e) => {
    setInputText(e.target.value);
  };
  const handlePadezh = (e) => {
    setPadezh(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    incline(inputText.toLowerCase(), padezh);
  };
  return (
    <Stack
      spacing={2}
      sx={{
        position: "absolute",
        left: "50%",
        top: "25%",
        transform: "translate(-50%, -25%)",
      }}
    >
      <Form
        inputText={inputText}
        handleInput={handleInput}
        padezh={padezh}
        handlePadezh={handlePadezh}
        handleSubmit={handleSubmit}
      />
      {res !== "" ? <Output result={res} /> : null}
    </Stack>
  );
};

export default App;

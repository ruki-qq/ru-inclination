import React from "react";
import {
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const Form = ({
  inputText,
  handleInput,
  padezh,
  handlePadezh,
  handleSubmit,
}) => {
  return (
    <>
      <Typography variant="h4">Склонение существительных</Typography>
      <TextField
        autoComplete="off"
        label="Введите слово в именительном падеже"
        variant="outlined"
        value={inputText}
        onChange={handleInput}
      />
      <FormControl fullWidth>
        <InputLabel>Выберите падеж</InputLabel>
        <Select value={padezh} label="Выберите падеж" onChange={handlePadezh}>
          <MenuItem value={"родительный"}>Родительный</MenuItem>
          <MenuItem value={"дательный"}>Дательный</MenuItem>
          <MenuItem value={"винительный"}>Винительный</MenuItem>
          <MenuItem value={"творительный"}>Творительный</MenuItem>
          <MenuItem value={"предложный"}>Предложный</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleSubmit}>
        Выполнить
      </Button>
    </>
  );
};

export default Form;

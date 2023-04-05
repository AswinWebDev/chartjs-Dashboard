import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const Dropdown = () => {
  const [val, setVal] = useState("");

  const handleChange = (event) => {
    setVal(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 190 }}>
      <FormControl fullWidth sx={{ backgroundColor: "#ffffff" }}>
        <InputLabel id="demo-simple-select-label">iOS App Project</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;

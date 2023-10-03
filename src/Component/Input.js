import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FullWidthTextField(props) {
  return (
    <Box
      sx={{
        width: 10000,
        maxWidth: "100%",
      }}
    >
      <TextField
        value={props.value}
        fullWidth
        label={props.label}
        onChange={props.onchnage}
      />
    </Box>
  );
}

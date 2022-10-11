import {createTheme} from "@mui/material";

export const theme = createTheme({
  components: {
    // Name of the component
    MuiFormControl: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '4px',
        },
        label: {
          fontSize: '5px'
        }
      },
    },
  },
});
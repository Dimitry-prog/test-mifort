import React, {ReactNode} from "react";
import styles from "../TakeProfitContainer/TakeProfitContainer.module.scss";
import {Box, TextField} from "@mui/material";
import {FC} from "react";

interface MyMuiInputProps {
  label: string;
  InputProps: object;
}

const MyMuiInput: FC<MyMuiInputProps> = ({label, InputProps}) => {
  return (
    <Box>
        <TextField
            className={styles.textField}
            id="filled-number"
            label={label}
            type="text"
            InputProps={
                {...InputProps}
            }
            variant="filled"
        />
    </Box>
  );
};

export default MyMuiInput;
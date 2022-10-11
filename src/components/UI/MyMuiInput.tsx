import React, {ReactNode, useState} from "react";
import styles from "../TakeProfitContainer/TakeProfitContainer.module.scss";
import {Box, TextField} from "@mui/material";
import {FC} from "react";

interface MyMuiInputProps {
  label: string;
  InputProps: object;
  value?: any;
  onChange?: () => void;
}

const MyMuiInput: FC<MyMuiInputProps> = ({label, InputProps,value, onChange}) => {

  return (
    <Box>
        <TextField
            className={styles.textField}
            id="filled-number"
            value={value}
            onChange={onChange}
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
import React, { FC, ReactElement, useState } from "react";
import {
  Box,
  Button,
  Stack,
  styled,
  Switch,
  SwitchProps,
  Typography,
} from "@mui/material";
import { Help } from "@mui/icons-material";
import TakeProfitContainer from "../TakeProfitContainer/TakeProfitContainer";
import styles from "./TakeProfit.module.scss";

const MySwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#2E79F6",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#2E79F6",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#4F4F55" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const TakeProfit: FC<any> = (): ReactElement => {
  const [showTakeProfit, setShowTakeProfit] = useState<boolean>(false);

  return (
    <Box sx={{ width: "100%", background: "#221F2F", padding: "10px" }}>
      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Typography variant={"body1"} sx={{ color: "#fff" }}>
            Take Profit
          </Typography>
          <Button sx={{ minWidth: "16px", padding: "0" }}>
            <Help sx={{ width: "16px", color: "#37373E" }} />
          </Button>
        </Box>
        <MySwitch
          onChange={(e) => setShowTakeProfit(!showTakeProfit)}
          className={styles.switch}
        />
      </Stack>
      {showTakeProfit && <TakeProfitContainer />}
      <Box
        mt={"10px"}
        mb={"10px"}
        sx={{
          color: "rgba(255, 255, 255, 0.5)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant={"body1"} sx={{ fontSize: "14px", width: "100%" }}>
          Projected profit
          <Typography
            variant={"body1"}
            component={"span"}
            sx={{ paddingLeft: "125px", color: "#fff" }}
          >
            0{" "}
          </Typography>{" "}
          USDT
        </Typography>
      </Box>
    </Box>
  );
};

export default TakeProfit;

import React, {FC, ReactElement} from "react";
import {Box} from "@mui/material";
import AddProfit from "../AddProfit/AddProfit";
import TakeProfitInputs from "../TakeProfitInputs/TakeProfitInputs";

const TakeProfitContainer: FC<any> = (): ReactElement => {

  return (
      <Box sx={{
          display: "flex",
          flexDirection: 'column',
          alignItems: "center",
          gap: "5px",
          marginBottom: '10px'
      }}>
          <TakeProfitInputs/>
          <TakeProfitInputs/>
          <TakeProfitInputs/>
          <AddProfit/>
    </Box>
  );
};

export default TakeProfitContainer;
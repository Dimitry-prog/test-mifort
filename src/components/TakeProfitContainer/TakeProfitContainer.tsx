import React, {FC, ReactElement, useState} from "react";
import {Box} from "@mui/material";
import AddProfit from "../AddProfit/AddProfit";
import TakeProfitInputs from "../TakeProfitInputs/TakeProfitInputs";

const TakeProfitContainer: FC<any> = (): ReactElement => {
    const [count, setCount] = useState<number>(1);

    const renderProfitInputs  = () => {
        setCount(count + 1);
    }

    const removeProfitInputs  = () => {
        setCount(count - 1);
    }

  return (
      <Box sx={{
          display: "flex",
          flexDirection: 'column',
          alignItems: "center",
          gap: "5px",
          marginBottom: '10px'
      }}>
          {[...Array(count)].map(( elem, index) => (
              <TakeProfitInputs key={index} removeProfitInputs={removeProfitInputs} count={count}/>
          ))}
          {(count < 5) && <AddProfit renderProfitInputs={renderProfitInputs} count={count}/>}
    </Box>
  );
};

export default TakeProfitContainer;
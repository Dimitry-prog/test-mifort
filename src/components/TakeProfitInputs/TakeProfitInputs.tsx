import React, {FC, ReactElement, useEffect, useState} from 'react';
import {Button, Stack} from "@mui/material";
import MyMuiInput from "../UI/MyMuiInput";
import {Cancel} from "@mui/icons-material";

interface TakeProfitInputsProps {
    removeProfitInputs: () => void;
    count: number
}

const TakeProfitInputs: FC<TakeProfitInputsProps> = ({removeProfitInputs, count}): ReactElement => {
    const [profitValue, setProfitValue] = useState<number>(0);

    useEffect(() => {
        setProfitValue(count*2 + profitValue);

    },[]);

    return (
        <Stack direction={'row'} spacing={'5px'} mb={'10px'} sx={{
            borderBottom: '1px solid #393644'
        }}>
            <MyMuiInput label={"Target"} InputProps={{endAdornment: "%"}} value={profitValue} />
            <MyMuiInput label={"Target price"} InputProps={{endAdornment: "USDT"}} />
            <MyMuiInput label={"Amount to buy"} InputProps={{endAdornment: "%"}}/>
            <Button
                onClick={removeProfitInputs}
                sx={{minWidth: "16px", padding: "0"}}
            >
                <Cancel sx={{width: "16px", height: "16px", color: "#393644", "&:hover": {color: "#DADADA"}}}/>
            </Button>
        </Stack>
    );
};

export default TakeProfitInputs;
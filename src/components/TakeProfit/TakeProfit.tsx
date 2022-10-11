import React, {FC, ReactElement, useState} from 'react';
import {Box, Button, Stack, Switch, Typography} from "@mui/material";
import {Help} from "@mui/icons-material";
import TakeProfitContainer from "../TakeProfitContainer/TakeProfitContainer";
import styles from './TakeProfit.module.scss'

const TakeProfit: FC<any> = (): ReactElement => {
    const [showTakeProfit, setShowTakeProfit] = useState<boolean>(false);

    return (
        <Box sx={{width: '100%', background: '#221F2F', padding: '10px'}}>
            <Stack direction='row' justifyContent="space-between">
                <Box sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <Typography variant={'body1'} sx={{color: '#fff'}}>
                        Take Profit
                    </Typography>
                    <Button sx={{minWidth: '16px', padding: '0'}}>
                        <Help sx={{width: '16px', color: '#37373E'}}/>
                    </Button>
                </Box>
                <Switch
                    onChange={ e => setShowTakeProfit(!showTakeProfit)}
                    className={styles.switch}
                />
            </Stack>
            {showTakeProfit && <TakeProfitContainer/>}
            <Box mt={'10px'} mb={'10px'} sx={{color: 'rgba(255, 255, 255, 0.5)', display: 'flex',
                justifyContent: 'space-between'}}>
            <Typography variant={'body1'} sx={{ fontSize: '14px', width: '100%'}}>
                Projected profit
                <Typography variant={'body1'} component={'span'} sx={{paddingLeft: '125px', color: '#fff'}}>0 </Typography> USDT
            </Typography>
            </Box>
        </Box>
    );
};

export default TakeProfit;
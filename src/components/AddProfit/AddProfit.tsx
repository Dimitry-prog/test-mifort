import React, {FC, ReactElement} from 'react';
import {Box, Button, Typography} from "@mui/material";
import {AddCircle} from "@mui/icons-material";

interface AddProfitProps {
    renderProfitInputs: () => void;
    count: number;
}

const AddProfit: FC<AddProfitProps> = ({renderProfitInputs, count}): ReactElement => {

    return (
        <Box onClick={renderProfitInputs}
            sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: 'flex-start',
            gap: "5px",
            width: '100%',
            "&:hover": {
                opacity: '.7',
                cursor: 'pointer',
            }
        }}>
            <Button sx={{minWidth: '16px', padding: '0'}}>
                <AddCircle sx={{width: '16px', height: '16px', color: '#0078FF', "&:hover": {opacity: '.8'}}}/>
            </Button>
            <Typography variant={'body1'} sx={{color: '#0078FF', fontSize: '15px'}}>
                Add profit target &nbsp;
                <Typography variant={'body1'} component={'span'}>{count} </Typography>/ 5
            </Typography>
        </Box>
    );
};

export default AddProfit;
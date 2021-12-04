import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from "./Copyright";

function Footer() {
    return (

<Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
<Typography variant="h6" align="center" gutterBottom>
  Owen Moore
</Typography>
<Typography
  variant="subtitle1"
  align="center"
  color="text.secondary"
  component="p"
>
</Typography>

<Copyright />
</Box>

    );
}

export default Footer;
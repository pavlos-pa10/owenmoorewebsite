import React from "react";
import Footer from './Footer'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Teaching() {

return(
    <>
     <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 1,
            pb: 1,
          }}
        >
        </Box>

    <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Teaching
            </Typography>
            </Container>
      
    

    <Footer />
    </>
  );
}
  export default Teaching;
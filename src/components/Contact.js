import React from "react";
import { Link } from "react-router-dom";
import Footer from './Footer';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import contact_image from '../assets/contact_image.jpeg'

import {Stack, Button} from '@mui/material';

function Contact() {
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
              Contact
            </Typography>
            </Container>
            <Container align="center">
            <img src={contact_image} alt="Owen Riding" />
            </Container>
            <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 3,
            pb: 3,
          }}
        >
        </Box>
            <Container>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
    To contact Owen or Laura to book lessons or discuss any horse instuction issues please use buttons below:
    </Typography>
  
    </Container>


            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
                 
    <Button variant="contained" onClick={() => {
    window.open('mailto:l.browne@hotmail.co.uk?subject=Lessons with Owen Moore')
  }} 
  >Book Lesson
  </Button>
              <Button variant="outlined"  onClick={() => {
    window.open('mailto:owenmoore@hotmail.co.uk?subject=Contact Owen from website')

  }}>Contact Owen</Button>
            </Stack>


    <Footer />
</>
  
  );
}
  export default Contact;
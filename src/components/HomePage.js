import React from "react";
import Footer from './Footer'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Stack, Button} from '@mui/material'
import image1 from '../assets/index_image_1.jpeg'


function HomePage(){

return (
    <>
    <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 1,
            pb: 1,
          }}
        ></Box>
    <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Owen Moore 
              <img src={image1}
               alt="Image"
              />
            </Typography>
            </Container>

  
<Container maxWidth="sm">
          

            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              
Over the last 30 years Owen has become widely known as an accomplished event rider, trainer, and instructor, catering for all levels.
            </Typography>            

  <Typography variant="h5" align="center" color="text.secondary" paragraph>           
   Owen is currently teaching at Lyneham Heath Equestrian, Oxfordshire, and in Cambridgeshire as well as on-demand locations. 
    Teaching allows Owen to combine his passion for the sport with his enthusiasm for nurturing talent.
    He teaches in Oxfordshire and Cambridgeshire regularly and runs clinics throughout the year.
   </Typography> 
   <Typography variant="h5" align="center" color="text.secondary" paragraph> 
His skills as a horseman and his empathy for the horse, coupled with his charismatic personality make him hugely popular with pupils, and he remains one of the most respected riders amongst his peers on the Eventing circuit.
</Typography> 
<Typography variant="h5" align="center" color="text.body" fontStyle='italic' fontFamily= 'Helvetica Neue' paragraph>
"One of the nicest, most experienced and gifted teachers on the circuit today, Owen’s ability to develop strong and trusting horse and rider partnerships is unsurpassed" – Tina Cook
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
  export default HomePage;
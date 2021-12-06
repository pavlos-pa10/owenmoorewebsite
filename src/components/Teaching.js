import React from "react";
import Footer from './Footer'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Stack, Button} from '@mui/material'
import teaching_image from '../assets/teaching_image.jpeg';
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
            <Container  align="center">
            <img src={teaching_image} alt="Owen Teaching" />
            </Container>
            

            <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 3,
            pb: 3,
          }}
        >
        </Box>
            <Typography variant="h5" align="left" color="text.body" paragraph>
            Owen works with pupils of all ages and capabilities from Pony Club through to International event riders. He instils confidence with his natural affinity for teaching and can offer help with mentoring, course walking, or with warming up at competitions. His natural good humour coupled with dedication and patience make him one of the most approachable and effective trainers in the UK today.
            </Typography>
            <Typography variant="h5" align="left" color="text.body" paragraph>
            Whilst he is happy to travel to alternative locations, Owen mainly bases his teaching at Lyneham Heath Farm where he teaches several times a week, either private or group sessions throughout the year. He is a BE accredited coach.
            </Typography>
            <Typography variant="h5" align="left" color="text.body" paragraph>
            To book a session with Owen, please contact Laura Browne on 07940 463 545 or using buttons below. 
            </Typography>

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
  export default Teaching;
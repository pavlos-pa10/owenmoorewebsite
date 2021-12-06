import React from "react";
import Footer from './Footer'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Plot from 'react-plotly.js';
import riding_image from '../assets/riding_image.jpeg';
import * as graph_1999 from "../assets/jsons/1999_horses.json";
import * as graph_2000 from "../assets/jsons/2000_horses.json";
import * as graph_2001 from "../assets/jsons/2001_horses.json";
import * as graph_2002 from "../assets/jsons/2002_horses.json";
import * as graph_2003 from "../assets/jsons/2003_horses.json";
import * as graph_2004 from "../assets/jsons/2004_horses.json";
import * as graph_2005 from "../assets/jsons/2005_horses.json";
import * as graph_2006 from "../assets/jsons/2006_horses.json";
import * as graph_2007 from "../assets/jsons/2007_horses.json";
import * as graph_2008 from "../assets/jsons/2008_horses.json";
import * as graph_2009 from "../assets/jsons/2009_horses.json";
import * as graph_2010 from "../assets/jsons/2010_horses.json";
import * as graph_2011 from "../assets/jsons/2011_horses.json";
import * as graph_2012 from "../assets/jsons/2012_horses.json";
import * as graph_2013 from "../assets/jsons/2013_horses.json";
import * as graph_2014 from "../assets/jsons/2014_horses.json";
import * as graph_2015 from "../assets/jsons/2015_horses.json";
import * as graph_2016 from "../assets/jsons/2016_horses.json";

function Riding(){
   
    return (
    <>
    <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 1,
            pb: 1,
          }}
        ></Box>
   <Container maxWidth="xl">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Riding
            
            <Container align="center">
            <img src={riding_image} alt="Owen Riding" />
            </Container>
            </Typography>
            <Typography variant="h5" align="left" color="text.body" paragraph>
            Owen’s passion has always been eventing and since his first BE competition at the age of seventeen, he has gone on to be one of the UK’s top riders.
            </Typography>
            <Typography variant="h5" align="left" color="text.body" paragraph>
            Owen has completed Badminton eight times (with four top twenty placings), Burghley four times, and has achieved numerous placings at International events. In addition, he was reserve for the 1992 Olympics and short listed for the World Equestrian Games and the Sydney Olympics.
            </Typography>
            <Typography variant="h5" align="left" color="text.body" fontStyle='italic' fontFamily= 'Helvetica Neue' paragraph>
            "Thorough, considered, and correct in his training methods, without doubt, he is one of the best." - Carl Hester
            </Typography>

            <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 5,
            pb: 5,
          }}
></Box> 

            <Typography variant="h2" align="center" color="text.secondary" paragraph>
              A snapshot of Owen Moore's British Eventing Riding Results.
              </Typography>
              <Typography variant="h6" align="center" color="text.secondary" paragraph>
              On mobile devices, best viewed on landscape mode. 
              </Typography>
            </Container>

           

            <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 3,
            pb: 3,
          }}
        ></Box>

 
<Container maxWidth="xl">
    <Plot
      data={graph_1999.data}
      layout={graph_1999.layout}
      />
    <Plot
      data={graph_2000.data}
      layout={graph_2000.layout}
      />
      <Plot
      data={graph_2001.data}
      layout={graph_2001.layout}
      />
      <Plot
      data={graph_2002.data}
      layout={graph_2002.layout}
      />
      <Plot
      data={graph_2003.data}
      layout={graph_2003.layout}
      />
      <Plot
      data={graph_2004.data}
      layout={graph_2004.layout}
      />
      <Plot
      data={graph_2005.data}
      layout={graph_2005.layout}
      />
      <Plot
      data={graph_2006.data}
      layout={graph_2006.layout}
      />
      <Plot
      data={graph_2007.data}
      layout={graph_2007.layout}
      />
      <Plot
      data={graph_2008.data}
      layout={graph_2008.layout}
      />
      <Plot
      data={graph_2009.data}
      layout={graph_2009.layout}
      />
      <Plot
      data={graph_2010.data}
      layout={graph_2010.layout}
      />
      <Plot
      data={graph_2011.data}
      layout={graph_2011.layout}
      />
      <Plot
      data={graph_2012.data}
      layout={graph_2012.layout}
      />
      <Plot
      data={graph_2013.data}
      layout={graph_2013.layout}
      />
      <Plot
      data={graph_2014.data}
      layout={graph_2014.layout}
      />
      <Plot
      data={graph_2015.data}
      layout={graph_2015.layout}
      />
      <Plot
      data={graph_2016.data}
      layout={graph_2016.layout}
      />
    
</Container>

          




    <Footer />
    </>
  );
}
  export default Riding;
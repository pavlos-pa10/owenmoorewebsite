import React from "react";
import Footer from './Footer'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Plot from 'react-plotly.js';
import { FormControl,Select } from "@mui/material";
import { InputLabel } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { useMemo, useState } from "react";  
import * as graph_1999 from "../assets/1999_horses.json";
import * as graph_2000 from "../assets/2000_horses.json";
import * as graph_2001 from "../assets/2001_horses.json";
import * as graph_2002 from "../assets/2002_horses.json";
import * as graph_2003 from "../assets/2003_horses.json";
import * as graph_2004 from "../assets/2004_horses.json";
import * as graph_2005 from "../assets/2005_horses.json";
import * as graph_2006 from "../assets/2006_horses.json";
import * as graph_2007 from "../assets/2007_horses.json";
import * as graph_2008 from "../assets/2008_horses.json";
import * as graph_2009 from "../assets/2009_horses.json";
import * as graph_2010 from "../assets/2010_horses.json";
import * as graph_2011 from "../assets/2011_horses.json";
import * as graph_2012 from "../assets/2012_horses.json";
import * as graph_2013 from "../assets/2013_horses.json";
import * as graph_2014 from "../assets/2014_horses.json";
import * as graph_2015 from "../assets/2015_horses.json";
import * as graph_2016 from "../assets/2016_horses.json";



const years = [
    {
    id:1,
    value:1999,
    label:"1999"
    },
    {
        id:2,
        value:2000,
        label:"2000"
    },
    {
        id:3,
        value:2001,
        label:"2001"
    },
    {
        id:4,
        value:2002,
        label:"2002"
    },
    {
        id:5,
        value:2003,
        label:"2003"
    },
    {
        id:6,
        value:2004,
        label:"2004"
    },
                {
                    id:7,
                    value:2005,
                    label:"2005"
                    },
                    {
                        id:8,
                        value:2006,
                        label:"2006"
                        },
                        {
                            id:9,
                            value:2007,
                            label:"2007"
                            },
                            {
                                id:10,
                                value:2008,
                                label:"2008"
                                },
                                {
                                    id:11,
                                    value:2009,
                                    label:"2009"
                                    },{
                                        id:12,
                                        value:2010,
                                        label:"2010"
                                        },{
                                            id:13,
                                            value:2011,
                                            label:"2011"
                                            },{
                                                id:14,
                                                value:2012,
                                                label:"2012"
                                                },{
                                                    id:15,
                                                    value:2013,
                                                    label:"2013"
                                                    },{
                                                        id:16,
                                                        value:2014,
                                                        label:"2014"
                                                        },{
                                                            id:17,
                                                            value:2015,
                                                            label:"2015"
                                                            },{
                                                                id:18,
                                                                value:2016,
                                                                label:"2016"
                                                                },
];  


function Riding(){
    const [selectedOption, setSelectedOption] = useState(years[0].value);
   

    const dropDownChangeHandler = e => {
        setSelectedOption(e.target.value)
       
        
        

    }
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
            
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
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
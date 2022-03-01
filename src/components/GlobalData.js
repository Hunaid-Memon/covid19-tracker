import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import NumberFormat from 'react-number-format';


export default function SimplePaper() {

  const [globalData, setGlobalData] = useState();

  useEffect(() => {
    const fetchGlobalData = async () => {
        const res = await fetch(`https://api.covid19api.com/summary`);
        const data = await res.json();
        console.log(data)
        console.log(data.Global)
        setGlobalData(data.Global)
    }
    fetchGlobalData()
  },[])

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: 110,
        },
      }}
    >
      <Paper elevation={3} sx={{ paddingTop: 2, color: 'green' }} >
        <Typography variant='h5' gutterBottom component='div'>
        <NumberFormat value={globalData && globalData.TotalConfirmed} displayType={'text'} thousandSeparator={true} prefix={''} />
            { }
        </Typography>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Total Infected
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ paddingTop: 2, color: 'red' }} >
        <Typography variant='h5' gutterBottom component='div'>
        { globalData && globalData.TotalDeaths}
        </Typography>
        <Typography variant='subtitle2' gutterBottom component='div'>
        Total Deaths
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ paddingTop: 2, color: 'green' }} >
        <Typography variant='h5' gutterBottom component='div'>
        { globalData && globalData.NewConfirmed}
        </Typography>
        <Typography variant='subtitle2' gutterBottom component='div'>
          New Infected
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ paddingTop: 2, color: 'red' }} >
        <Typography variant='h5' gutterBottom component='div'>
        { globalData && globalData.NewDeaths}
        </Typography>
        <Typography variant='subtitle2' gutterBottom component='div'>
          New Deaths
        </Typography>
      </Paper>
    </Box>
  );
}

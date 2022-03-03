import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import NumberFormat from 'react-number-format';


export default function GlobalData() {

  const [globalData, setGlobalData] = useState();
  const [dataloading, setDataLoading] = useState(false);

  const loading = 'Loading...'

  useEffect(() => {
    const fetchGlobalData = async () => {
        setDataLoading(true)
        const res = await fetch(`https://api.covid19api.com/summary`);
        const data = await res.json();
        setGlobalData(data.Global)
        // console.log(data.Global)
        setDataLoading(false)
    }
    fetchGlobalData()
  },[])

  if(dataloading) {
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
      <Paper elevation={3} sx={{ paddingTop: 4, color: 'green' }} >
        <Typography variant='h5' gutterBottom component='div'>
        {loading}
        </Typography>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Total Infected
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ paddingTop: 4, color: 'red' }} >
        <Typography variant='h5' gutterBottom component='div'>
        {loading}
        </Typography>
        <Typography variant='subtitle2' gutterBottom component='div'>
        Total Deaths
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ paddingTop: 4, color: 'green' }} >
        <Typography variant='h5' gutterBottom component='div'>
            {loading}
        </Typography>
        <Typography variant='subtitle2' gutterBottom component='div'>
          New Infected
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ paddingTop: 4, color: 'red' }} >
        <Typography variant='h5' gutterBottom component='div'>
        {loading}
        </Typography>
        <Typography variant='subtitle2' gutterBottom component='div'>
          New Deaths
        </Typography>
      </Paper>
    </Box>
    )
  }

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
      <Paper elevation={3} sx={{ paddingTop: 4, color: 'green' }} >
        <Typography variant='h5' gutterBottom component='div'>
        <NumberFormat value={globalData && globalData.TotalConfirmed} displayType={'text'} thousandSeparator={true} prefix={''} />
        </Typography>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Total Infected
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ paddingTop: 4, color: 'red' }} >
        <Typography variant='h5' gutterBottom component='div'>
        <NumberFormat value={globalData && globalData.TotalDeaths} displayType={'text'} thousandSeparator={true} prefix={''} />
        </Typography>
        <Typography variant='subtitle2' gutterBottom component='div'>
        Total Deaths
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ paddingTop: 4, color: 'green' }} >
        <Typography variant='h5' gutterBottom component='div'>
        <NumberFormat value={globalData && globalData.NewConfirmed} displayType={'text'} thousandSeparator={true} prefix={''} />
        </Typography>
        <Typography variant='subtitle2' gutterBottom component='div'>
          New Infected
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ paddingTop: 4, color: 'red' }} >
        <Typography variant='h5' gutterBottom component='div'>
        <NumberFormat value={globalData && globalData.NewDeaths} displayType={'text'} thousandSeparator={true} prefix={''} />
        </Typography>
        <Typography variant='subtitle2' gutterBottom component='div'>
          New Deaths
        </Typography>
      </Paper>
    </Box>
  );
}

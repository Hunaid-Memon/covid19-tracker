import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import NumberFormat from 'react-number-format';
import Grid from '@mui/material/Grid';



export default function CountryData() {

  const [countryData, setCountryData] = useState([]);
  const [dataloading, setDataLoading] = useState(false);

  const loading = 'Loading...'

  useEffect(() => {
    const fetchCountryData = async () => {
        setDataLoading(true)
        const res = await fetch(`https://api.covid19api.com/summary`);
        const data = await res.json();
        // console.log(data.Countries);
        setCountryData(data.Countries)
        setDataLoading(false)
        // console.log(countryData[0].TotalConfirmed)
    }
    fetchCountryData()
  },[])

  let countrylist = countryData.map(function (country, key) {
        return (
                    console.log(country.Slug)
                )
    });
  

//   let countrylist = countryData.map(function (country, key) {
//     return (
//         <option key={key} value={country.Slug} >{country.Country}</option>
//             )
// });
 


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

      {/* <Paper elevation={3} sx={{ paddingTop: 4, color: 'green', border: '2px solid blue' }} > */}
      
      <Grid container spacing={2} >
      <Grid item xs={12} sx={{border: '2px solid blue', marginBottom: '5px'}} >
          <input type="text" placeholder="Search by country" />
      </Grid>
        <Grid item xs={6} sx={{border: '2px solid blue'}} >
        <Typography variant='h5' gutterBottom component='div'>
        {/* <NumberFormat value={countryData && countryData.TotalConfirmed} displayType={'text'} thousandSeparator={true} prefix={''} /> */}
            12000
        </Typography>
        </Grid>
        <Grid item xs={6} sx={{border: '2px solid blue'}} >
        <Typography variant='h5' gutterBottom component='div'>
        {/* <NumberFormat value={countryData && countryData.TotalConfirmed} displayType={'text'} thousandSeparator={true} prefix={''} /> */}
            12000
        </Typography>
        </Grid>
      </Grid>
        {/* </Paper> */}
    
      </Box>
  );
}

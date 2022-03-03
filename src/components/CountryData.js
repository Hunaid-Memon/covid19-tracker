import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import NumberFormat from 'react-number-format';


export default function CountryData() {

  const [countryData, setCountryData] = useState([]);
  const [dataloading, setDataLoading] = useState(false);

  const loading = 'Loading...'

  useEffect(() => {
    const fetchCountryData = async () => {
        setDataLoading(true)
        const res = await fetch(`https://api.covid19api.com/summary`);
        const data = await res.json();
        console.log(data.Countries);
        setCountryData(data.Countries)
        setDataLoading(false)
        // console.log(countryData[0].TotalConfirmed)
    }
    fetchCountryData()
  },[])

  let countrylist = countryData.map(function (country, key) {
    return (
        <option key={key} value={country.Slug} >{country.Country}</option>
    )
    console.log(country.Country);
});
 

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
        {/* <NumberFormat value={countryData && countryData.TotalConfirmed} displayType={'text'} thousandSeparator={true} prefix={''} /> */}
        <label for="Countries">Choose a Country:</label>
        <select name="Countries">
            {countrylist}    
         </select>
        
        </Typography>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Total Infected
        </Typography>
      </Paper>

      </Box>
  );
}

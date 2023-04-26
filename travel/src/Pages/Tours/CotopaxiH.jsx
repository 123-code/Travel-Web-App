import React from 'react';
import TourPage,{TourHeader,Incluye,NoIncluye} from '../../Components/TourPage';
import { Paper } from '@mui/material';
import ReserveButton from '../../Components/ReserveButton';
import Data from './Data.json';
import Card from '@mui/material/Card';
import { fontFamily } from '@mui/system';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


export function Cuyabeno() { 

  const createMarkup = (text) => {
    return { __html: text }; 
  }; 
  return (
    <div style={{ paddingTop: '150px', color:'black',justifyContent: 'center'}}>
      <h1 style={{color:'black', fontFamily:'Helvetica'}}> Cotopaxi Hike </h1>
      <Paper elevation={3}>
        <div style={{ display: 'flex', justifyContent: 'center',paddingTop: '150px' }}>
          <Card sx={{ maxWidth: 550 }} variant="outlined">
          <CardMedia
        sx={{ height: 340 }}
        image="https://www.linkpicture.com/q/download_159.jpeg"
        title="cotopaxi"
      />
            <Typography variant="h5" component="div">
              Tour Description
            </Typography>
            <div>
              <h2> Itinerary </h2>
              {Data.CotopaxiH.itinerary}
              <h2> Includes  </h2>
              {Data.CotopaxiH.includes.guide}
              {Data.CotopaxiH.includes.transportation}
              {Data.CotopaxiH.includes.meals}
              {Data.CotopaxiH.includes.bicycle}
              {Data.CotopaxiH.includes.permits}
            </div><br></br>
            <h2> Not Included  </h2>
            {Data.CotopaxiH.not_included.extra_food_drinks}
            {Data.CotopaxiH.not_included.tips}
            {Data.CotopaxiH.not_included.snacks}
            {Data.CotopaxiH.not_included.tax}
            <br></br>
            <h2> Necessary Equipment </h2>
            {Data.CotopaxiH.necessary_equipment}
            <ReserveButton/>
          </Card>
        </div>
      </Paper>
    </div>
  ); 
}
export default Cuyabeno;
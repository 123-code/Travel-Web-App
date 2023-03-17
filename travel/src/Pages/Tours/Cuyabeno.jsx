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
    <div style={{ paddingTop: '150px', color:'black'}}>
      <h1 style={{color:'black', fontFamily:'Helvetica'}}> Cuyabeno </h1>
      <Paper elevation={3}>
      <Card sx={{ maxWidth: 550 }} variant="outlined">
      <Typography variant="h5" component="div">
        Tour Description
      </Typography>
      <div>
  {Data.Cuyabeno.Day1.Activity}
  {Data.Cuyabeno.Day1.MealsIncluded}
</div><br></br>


<div style={{color:'black', fontFamily:'Helvetica'}}>
  {Data.Cuyabeno.Day2.Activity}
  {Data.Cuyabeno.Day2.MealsIncluded}
</div>



<div style={{color:'black', fontFamily:'Helvetica'}}>
  {Data.Cuyabeno.Day3.Activity}
  {Data.Cuyabeno.Day3.MealsIncluded}
</div><br></br>

<div style={{color:'black', fontFamily:'Helvetica'}}>
  {Data.Cuyabeno.Day4.Activity}
  {Data.Cuyabeno.Day4.MealsIncluded}
</div><br></br>

<div style={{color:'black', fontFamily:'Helvetica'}}>
  {Data.Cuyabeno.Day5.Activity}
  {Data.Cuyabeno.Day5.MealsIncluded}
</div><br></br>
  
</Card>

<br></br>
<Card sx={{ maxWidth: 550 }} >
           <Incluye text={<div dangerouslySetInnerHTML={createMarkup(Data.Cuyabeno.Included)}/>}/>
           <br></br>
           <h1 style={{color:'black', fontFamily:'Helvetica'}}> Packing list: </h1>
           <br></br>
           <Incluye text={<div dangerouslySetInnerHTML={createMarkup(Data.Cuyabeno.RecommendedPackingList)}/>}/>

           <NoIncluye text={<div dangerouslySetInnerHTML={createMarkup(Data.Cuyabeno.Excluded)}/>}/>
          
          <ReserveButton/>
          </Card>
</Paper>
    </div>
  ); 
}
export default Cuyabeno;
//<button onClick={()=>{navigate("/")}}> Reserve </button>
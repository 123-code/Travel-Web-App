import React from 'react';
import TourPage,{TourHeader,Incluye,NoIncluye} from '../../Components/TourPage';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Data from './Data.json';


export function CotopaxiS() {
  const createMarkup = (text) => {
    return { __html: text };
  };
  return (
    <div style={{ paddingTop: '150px',justifyContent: 'center'  }}>
               <div style={{ display: 'flex', justifyContent: 'center',paddingTop: '150px' }}>
    <Card sx={{ maxWidth: 550}} variant="outlined">
      <TourHeader htext={Data.Papallacta.main}/>
      </Card>

      <Card sx={{ maxWidth: 550}} variant="outlined">
      <TourPage text={<div dangerouslySetInnerHTML={createMarkup(Data.Papallacta.Itinerario)} />} image={"https://i.ibb.co/mX5XkLT/downloadmm.jpg"}/>
      </Card>

           <Card sx={{ maxWidth: 550}} variant="outlined">
           <Incluye text={<div dangerouslySetInnerHTML={createMarkup(Data.Papallacta.Incluye)}/>}/>
           </Card>
           <Card sx={{ maxWidth: 550}} variant="outlined">
           <NoIncluye text={<div dangerouslySetInnerHTML={createMarkup(Data.Papallacta.NoIncluye)}/>}/>
           </ Card>
    </div>
   </div>
      
    
  );
}

export default CotopaxiS;
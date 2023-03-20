import React from 'react';
import TourPage,{TourHeader,Incluye,NoIncluye} from '../../Components/TourPage';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import ReserveButton from '../../Components/ReserveButton';
import Data from './Data.json';


export function CotopaxiS() {
  const createMarkup = (text) => {
    return { __html: text };
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center',paddingTop: '150px' }}>
    <div>
    <Card sx={{ maxWidth: 550}} variant="outlined">
    <CardMedia
        sx={{ height: 340 }}
        image="https://www.linkpicture.com/q/download-3_51.jpeg"
        title="cotopaxi"
      />
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
           <ReserveButton/>
           </ Card>
    </div>
   </div>
      
    
  );
}

export default CotopaxiS;
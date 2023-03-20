import React from 'react';
import TourPage, { TourHeader, Incluye, NoIncluye } from '../../Components/TourPage';
import Data from './Data.json';
import Form from '../../Components/Form';
import { Paper } from '@mui/material';
import ReserveButton from '../../Components/ReserveButton';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

const OtavaloS = () => {
  const createMarkup = (text) => {
    return { __html: text };
  };
  return (
    <div style={{ paddingTop: '150px' }}>
      <div className="tour-container">
        <div>
          <h1> Otavalo </h1>
          <Paper elevation={3}>
            <div  style={{ display: 'flex', justifyContent: 'center',paddingTop: '150px' }}>
            <Card>
            <CardMedia
        sx={{ height: 340 }}
        image="https://i.ibb.co/8cMhT5j/quilotoa.jpg"
        title="cuyabeno"
      />
            <TourHeader htext={Data.OtavaloS.main} />
          <TourPage text={<div dangerouslySetInnerHTML={createMarkup(Data.OtavaloS.ITINERARY)} />} image={"https://i.ibb.co/mX5XkLT/downloadmm.jpg"} />
          <Incluye text={<div dangerouslySetInnerHTML={createMarkup(Data.OtavaloS.INCLUDES)} />} />
          <NoIncluye text={<div dangerouslySetInnerHTML={createMarkup(Data.OtavaloS.NOT_INCLUDED)} />} />
          <ReserveButton/>
            </Card>
            </div>
          </Paper>
        </div>
  
      </div>
    </div>
  );

}
export default OtavaloS;
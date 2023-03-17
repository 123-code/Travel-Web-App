import React from 'react';
import TourPage, { TourHeader, Incluye, NoIncluye } from '../../Components/TourPage';
import Data from './Data.json';
import Form from '../../Components/Form';
import { Paper } from '@mui/material';
import ReserveButton from '../../Components/ReserveButton';

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
          <TourHeader htext={Data.OtavaloS.main} />
          <TourPage text={<div dangerouslySetInnerHTML={createMarkup(Data.OtavaloS.ITINERARY)} />} image={"https://i.ibb.co/mX5XkLT/downloadmm.jpg"} />
          <Incluye text={<div dangerouslySetInnerHTML={createMarkup(Data.OtavaloS.INCLUDES)} />} />
          <NoIncluye text={<div dangerouslySetInnerHTML={createMarkup(Data.OtavaloS.NOT_INCLUDED)} />} />
          <ReserveButton/>
          </Paper>
        </div>
  
      </div>
    </div>
  );

}
export default OtavaloS;
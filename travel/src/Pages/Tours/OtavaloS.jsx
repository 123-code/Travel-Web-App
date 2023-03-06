import React from 'react';
import TourPage, { TourHeader, Incluye, NoIncluye } from '../../Components/TourPage';
import Data from './Data.json';
import Form from '../../Components/Form';

const OtavaloS = () => {
  const createMarkup = (text) => {
    return { __html: text };
  };
  return (
    <div style={{ paddingTop: '10px' }}>
      <div className="tour-container">
        <div>
          <TourHeader htext={Data.OtavaloS.main} />
          <TourPage text={<div dangerouslySetInnerHTML={createMarkup(Data.OtavaloS.ITINERARY)} />} image={"https://i.ibb.co/mX5XkLT/downloadmm.jpg"} />
          <Incluye text={<div dangerouslySetInnerHTML={createMarkup(Data.OtavaloS.INCLUDES)} />} />
          <NoIncluye text={<div dangerouslySetInnerHTML={createMarkup(Data.OtavaloS.NOT_INCLUDED)} />} />
        </div>
        <div className="form-container">
          <Form />
        </div>
      </div>
    </div>
  );

}
export default OtavaloS;
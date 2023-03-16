import React from 'react';
import TourPage,{TourHeader,Incluye,NoIncluye} from '../../Components/TourPage';
import Data from './Data.json';
import ReserveButton from '../../Components/ReserveButton';

const PapallactaMain = () => {
  
    const createMarkup = (text) => {
        return { __html: text };
    };
    const commonStyle = {
        fontSize: '1.2rem',
        lineHeight: '1.5',
        color: '#333',
        marginBottom: '2rem',
        fontWeight: '400',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'left', // added textAlign property
    }
    return (
        <div style={{ paddingTop: '150px' }}>
           <TourPage text={<div dangerouslySetInnerHTML={createMarkup(Data.Quilotoa.ITINERARY)} style={commonStyle} />} image={"https://i.ibb.co/mX5XkLT/downloadmm.jpg"}/>
           <ReserveButton/>
        </div> 
    );
}
 
export default PapallactaMain;
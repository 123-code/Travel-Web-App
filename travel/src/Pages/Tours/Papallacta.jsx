import React from 'react';
import TourPage,{TourHeader,Incluye,NoIncluye} from '../../Components/TourPage';
import { Paper } from '@mui/material';
import ReserveButton from '../../Components/ReserveButton';
import Data from './Data.json';

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
            <h1>Papallacta</h1>
           <TourHeader htext={Data.Papallacta.main}/>
           <Paper elevation={3}>
           <TourPage text={<div dangerouslySetInnerHTML={createMarkup(Data.Papallacta.Itinerario)} style={commonStyle} />} image={"https://i.ibb.co/mX5XkLT/downloadmm.jpg"}/>
           <Incluye text={<div dangerouslySetInnerHTML={createMarkup(Data.Papallacta.Incluye)} style={{ ...commonStyle, marginBottom: '1.5rem' }}/>}/>
           <NoIncluye text={<div dangerouslySetInnerHTML={createMarkup(Data.Papallacta.NoIncluye)} style={{ ...commonStyle, marginBottom: '1.5rem' }}/>}/>
              <ReserveButton/>
           </Paper>
        </div> 
    );
}
 
export default PapallactaMain;
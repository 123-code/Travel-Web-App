import React from 'react';
import TourPage,{TourHeader,Incluye,NoIncluye} from '../../Components/TourPage';
import { Paper } from '@mui/material';
import ReserveButton from '../../Components/ReserveButton';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

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
        <div style={{ paddingTop: '150px',justifyContent: 'center'  }}>
            <h1>Papallacta</h1>
            <Paper elevation={3}>
            <div style={{ display: 'flex', justifyContent: 'center',paddingTop: '150px' }}>
            <Card sx={{ maxWidth: 550}} variant="outlined">
            <CardMedia
        sx={{ height: 340 }}
        image="https://i.ibb.co/mX5XkLT/downloadmm.jpg"
        title="cuyabeno"
      />
            <TourHeader htext={Data.Papallacta.main}/>
            </Card>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center',paddingTop: '150px' }}>
            <Card sx={{ maxWidth: 550 }} variant="outlined">
           <TourPage text={<div dangerouslySetInnerHTML={createMarkup(Data.Papallacta.Itinerario)} style={commonStyle} />} image={"https://i.ibb.co/mX5XkLT/downloadmm.jpg"}/>
           <Incluye text={<div dangerouslySetInnerHTML={createMarkup(Data.Papallacta.Incluye)} style={{ ...commonStyle, marginBottom: '1.5rem' }}/>}/>
           <NoIncluye text={<div dangerouslySetInnerHTML={createMarkup(Data.Papallacta.NoIncluye)} style={{ ...commonStyle, marginBottom: '1.5rem' }}/>}/>
              <ReserveButton/>
              </Card>
                </div>
           </Paper>
        </div> 
    );
}
 
export default PapallactaMain;
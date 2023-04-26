import React from 'react';
import TourPage,{TourHeader,Incluye,NoIncluye} from '../../Components/TourPage';
import ReserveButton from '../../Components/ReserveButton';
import { Paper } from '@mui/material';
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
        <div style={{ paddingTop: '150px' }}>
            <h1> Mindo </h1>
 
            <Paper elevation={3}>
                <div style={{ display: 'flex', justifyContent: 'center',paddingTop: '150px' }}>
                <Card sx={{ maxWidth: 550}} variant="outlined">
                <CardMedia
        sx={{ height: 340 }}
        image="https://www.linkpicture.com/q/images_1152.jpeg"
        title="mindo"
      />
                <TourPage text={<div dangerouslySetInnerHTML={createMarkup(Data.Mindo)} style={commonStyle} />} image={"https://i.ibb.co/mX5XkLT/downloadmm.jpg"}/>
                <ReserveButton style={{itemsAlign:"right"}}/>
                </Card>
                </div>
    </Paper>
        

    </div> 
    );
}
 
export default PapallactaMain;
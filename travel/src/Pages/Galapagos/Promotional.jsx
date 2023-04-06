import React from 'react';
import { GalapagosTable,CreateData } from '../../Components/GalapagosTable';
import Card from '@mui/material/Card';
import { fontFamily } from '@mui/system';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Paper,Table } from '@mui/material';
import ReserveButton from '../../Components/ReserveButton'

export default function Promotional() {

   const rows = [
    CreateData('Balcony Stateroom',5050,3450),
    CreateData('Master Suite - Double',6325,4325),
    CreateData('Master Suite - Triple',7895,5395),
    CreateData('Charter - Maximum 16 pax',80800,55200),
   ]
    return (
        <div style={{ paddingTop: '150px', color:'black',justifyContent: 'center'}}>
            <Paper elevation={3}>
                <Card> 
                    <GalapagosTable tablerow={rows}/>
                  </Card>
                  <ReserveButton/>
            </Paper>
     
        </div>
    );
}


   
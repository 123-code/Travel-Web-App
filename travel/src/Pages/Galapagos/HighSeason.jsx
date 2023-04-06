import React from 'react';
import { GalapagosTable,CreateData } from '../../Components/GalapagosTable';
import Card from '@mui/material/Card';
import { fontFamily } from '@mui/system';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Paper,Table } from '@mui/material';
import ReserveButton from '../../Components/ReserveButton'


export default function High() {

   const rows = [
    CreateData('Balcony Stateroom',6395,4425),
    CreateData('Master Suite - Double',7995,5550),
    CreateData('Master Suite - Triple',7350,5095),
    CreateData('Charter - Maximum 16 pax',102320,70800),
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


   
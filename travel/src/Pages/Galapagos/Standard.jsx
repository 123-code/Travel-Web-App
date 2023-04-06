import React from 'react';
import { GalapagosTable,CreateData } from '../../Components/GalapagosTable';
import Card from '@mui/material/Card';
import { fontFamily } from '@mui/system';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Paper,Table } from '@mui/material';
import ReserveButton from '../../Components/ReserveButton'

export default function Standard() {

   const rows = [
    CreateData('Balcony Stateroom',5575,3825),
    CreateData('Master Suite - Double',6950,4775),
    CreateData('Master Suite - Triple',6395,4395),
    CreateData('Charter - Maximum 16 pax',89200,61200),
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


   
             
 
import React from 'react';
import { GalapagosTable,CreateData } from '../../Components/GalapagosTable';
import Card from '@mui/material/Card';
import { fontFamily } from '@mui/system';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Paper,Table } from '@mui/material';

export default function Standard() {

   const rows = [
    CreateData('Ocean View Suite',5575,4739,3825,3251),
   ]
    return (
        <div style={{ paddingTop: '150px', color:'black',justifyContent: 'center'}}>
            <Paper elevation={3}>
                <Card>
                    <GalapagosTable tablerow={rows}/>
                  </Card>
  
            
            </Paper>
     
        </div>
    );
}
/*
<CardMedia
        sx={{ height: 340 }}
        image="https://www.linkpicture.com/q/download-2_15.jpeg"
        title="cuyabeno"
        />
*/ 

   
             
 
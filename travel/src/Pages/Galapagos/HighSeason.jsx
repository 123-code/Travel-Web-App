import React from 'react';
import TablaPromo from '../../Components/TablaPromocionalTreasure';
import  GalapagosTable from '../../Components/GalapagosTable';
import TablaHigh from '../../Components/TablaHightreasure';

import ReserveButton from '../../Components/ReserveButton';
import Destinos from '../../Components/Destinos';
import Treasure from '../../Imgs/Treasure.png';
import '../../Styling/Rates.css'
export default function High() {

   
    return (
        <div >
            <div className='TreasureBanner'>
                <Destinos imageSrc={(Treasure)} title="Treasure" text="Precios" />
            </div>    
            <div className='TablaEstandar'>
                <GalapagosTable/>
            </div>
            <div className='tablaHigh'>
                <TablaHigh/>
            </div>   
            <div className='tablaPromo'>
                <TablaPromo/>
            </div>   
            <div className='Btnrsv'>
                <ReserveButton/>
            </div>     
             
                  
       
     
        </div>
    );
}


   
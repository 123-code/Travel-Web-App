import React from 'react';
import TablaPromo from '../../Components/ArchipelPromo';
import EstandarArchipel from '../../Components/ArchipelEstandar';
import TablaHigh from '../../Components/ArchipelHigh';
import ReserveButton from '../../Components/ReserveButton';
import Destinos from '../../Components/Destinos';
import archipel from '../../Imgs/Archipel.png';
import '../../Styling/Rates.css'
export default function High() {

   
    return (
        <div >
            <div className='TreasureBanner'>
                <Destinos imageSrc={(archipel)} title="Archipel I" text="Precios" />
            </div>    
            <div className='TablaEstandar'>
                <EstandarArchipel/>
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


   
import React from 'react';
import TablaPromo from '../../Components/SolarisPromo';
import EstandarSolaris from '../../Components/EstandarSolaris';
import TablaHigh from '../../Components/SolarisHigh';
import ReserveButton from '../../Components/ReserveButton';
import Destinos from '../../Components/Destinos';
import { DestinosHeader } from "../../Components/Destinos";
import Solaris from '../../Imgs/Solaris.png';
import '../../Styling/Rates.css'
import { DestinosHeader } from "../../Components/Destinos";
export default function High() {

   
    return (
        <div >
            <div className='TreasureBanner'>
                <DestinosHeader imageSrc={(Solaris)} title="Solaris" text="Precios" />
            </div>    
            <div className='TablaEstandar'>
                <EstandarSolaris/>
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


   
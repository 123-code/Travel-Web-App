import React from 'react';
import TablaPromo from '../../Components/AquaPromo';
import Estandar from '../../Components/aquaEstandar';
import TablaHigh from '../../Components/AquaHigh';
import ReserveButton from '../../Components/ReserveButton';
import Aqua from '../../Imgs/Aqua.png';
import '../../Styling/Rates.css';
import { DestinosHeader } from "../../Components/Destinos";
export default function High() {

   
    return (
        <div >
            <div className='TreasureBanner'>
                <DestinosHeader imageSrc={(Aqua)} title="Aqua" text="Precios" />
            </div>    
            <div className='TablaEstandar'>
                <Estandar/>
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


   
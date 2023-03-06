import React from 'react';
import TourPage,{TourHeader,Incluye,NoIncluye} from '../../Components/TourPage';
import Data from './Data.json';


export function CotopaxiS() {
  const createMarkup = (text) => {
    return { __html: text };
  };
  return (
    <div style={{ paddingTop: '70px' }}>
       <TourHeader htext={Data.Papallacta.main}/>
           <TourPage text={<div dangerouslySetInnerHTML={createMarkup(Data.Papallacta.Itinerario)} />} image={"https://i.ibb.co/mX5XkLT/downloadmm.jpg"}/>
           <Incluye text={<div dangerouslySetInnerHTML={createMarkup(Data.Papallacta.Incluye)}/>}/>
           <NoIncluye text={<div dangerouslySetInnerHTML={createMarkup(Data.Papallacta.NoIncluye)}/>}/>
    </div>
  );
}

export default CotopaxiS;
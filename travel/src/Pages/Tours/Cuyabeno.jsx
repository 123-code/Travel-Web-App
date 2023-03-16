import React from 'react';
import TourPage,{TourHeader,Incluye,NoIncluye} from '../../Components/TourPage';
import Data from './Data.json';
import {FormPage} from '../FormPage';
import { useNavigate } from "react-router-dom";

export function Cuyabeno() { 

  const createMarkup = (text) => {
    return { __html: text };
  }; 
  return (
    <div style={{ paddingTop: '150px', color:'black' }}>
      <h1 style={{color:'black'}}> Cuyabeno </h1>
      <div>
  {Data.Cuyabeno.Day1.Activity}
  {Data.Cuyabeno.Day1.MealsIncluded}
</div><br></br>

<div>
  {Data.Cuyabeno.Day2.Activity}
  {Data.Cuyabeno.Day2.MealsIncluded}
</div><br></br>

<div>
  {Data.Cuyabeno.Day3.Activity}
  {Data.Cuyabeno.Day3.MealsIncluded}
</div><br></br>

<div>
  {Data.Cuyabeno.Day4.Activity}
  {Data.Cuyabeno.Day4.MealsIncluded}
</div><br></br>

<div>
  {Data.Cuyabeno.Day5.Activity}
  {Data.Cuyabeno.Day5.MealsIncluded}
</div><br></br>
  
          <h1 style={{color:'black'}}> Included: </h1>
           <Incluye text={<div dangerouslySetInnerHTML={createMarkup(Data.Cuyabeno.Included)}/>}/>
           <h1 style={{color:'black'}}> Packing list: </h1>
           <Incluye text={<div dangerouslySetInnerHTML={createMarkup(Data.Cuyabeno.RecommendedPackingList)}/>}/>
           <h1 style={{color:'black'}}> Excluded: </h1>
           <NoIncluye text={<div dangerouslySetInnerHTML={createMarkup(Data.Cuyabeno.Excluded)}/>}/>

    </div>
  ); 
}
export default Cuyabeno;
//<button onClick={()=>{navigate("/")}}> Reserve </button>
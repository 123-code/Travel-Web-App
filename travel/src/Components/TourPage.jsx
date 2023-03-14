import React from 'react';

export function TourHeader({htext}){
    return(
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <h1 style={{fontSize: 25 ,textAlign: 'left', color:"black"}}>{htext}</h1>
        </div>
    );
}


export default function TourPage({text,image}) {
  return (
    <>
     <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <h1 style={{fontSize: 25 ,textAlign: 'left', color:"black"}}>{text}</h1>
    </div>
    <image src={image}/>
    </>
   
  );
}

export function Incluye({text}){
return(
    <>
      <h1 style={{color:"black"}}> Includes </h1>
    <div style={{display: 'flex'}}>
    <h1 style={{fontSize: 25 , color:"black"}}>{text}</h1>
    </div>  
    </>
)
}

export function NoIncluye({text}){
    return(
        <>
        <h1 style={{color:"black"}}> Not Included </h1>
        <div style={{display: 'flex'}}>
        <h1 style={{fontSize: 25 ,textAlign: 'left', color:"black"}}>{text}</h1>
        </div>
        </>
    )
    }


















import React from "react";
import data from '../Data/About.json'
import '../App.css'
import photo from '../afb509d1-0135-4731-8edc-3a098824f8b2 1.png'

const AboutPage = () => {
    return (
        
<>
<div style={{ width: "50%", float: "left" }}>
<body className="text">
<br></br>
<h1>Nosotros</h1>
<img src='https://i.ibb.co/DrSJWVr/thumbnail-de7286cd-129b-47f0-8e03-5c89cf93e493-1-1.png'/>
<h2>{data.p1}</h2>
<br></br>
<h2>{data.p2}</h2>
<br></br>
<h2>{data.p3}</h2>
</body>
</div> 
</>
    );

}
export default AboutPage;

/*
<a href="https://ibb.co/sWMfRmW"><img src="https://i.ibb.co/DrSJWVr/thumbnail-de7286cd-129b-47f0-8e03-5c89cf93e493-1-1.png" alt="thumbnail-de7286cd-129b-47f0-8e03-5c89cf93e493-1-1" border="0"></a>
*/
import React from "react";
import data from '../Data/About.json';
import Form from '../Components/Form';
import '../App.css'


const AboutPage = () => {
    return (



<>
<div style={{ width: "50%", float: "left" }}>
<body className="text">
<br></br>
<h1 className="h1underlined">Nosotros</h1>
<img src='https://i.ibb.co/DrSJWVr/thumbnail-de7286cd-129b-47f0-8e03-5c89cf93e493-1-1.png'/>
<h3 className="textstyle">{data.p1}</h3>
<br></br>
<h3 className="textstyle">{data.p2}</h3>
<br></br>
<h3 className="textstyle">{data.p3}</h3>
</body>
</div> 
<div style={{ width: "50%", float: "right" }}>
<body style={{backgroundColor:"gray"}} className="text">
<Form/>
</body>
</div>
</>
    );

}
export default AboutPage;

/*
<a href="https://ibb.co/sWMfRmW"><img src="https://i.ibb.co/DrSJWVr/thumbnail-de7286cd-129b-47f0-8e03-5c89cf93e493-1-1.png" alt="thumbnail-de7286cd-129b-47f0-8e03-5c89cf93e493-1-1" border="0"></a>
*/
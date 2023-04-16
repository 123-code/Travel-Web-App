import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MainPage from './Pages/Main';
import AboutPage from './Pages/About';
import Navbar from './Components/Navbar';
import PeruPage from './Pages/PeruPage';
import GalapagosPage from './Pages/GalapagosPage'; 
import HighlandsPage from './Pages/HighlandsPage';
import EcuadorPage from './Pages/AmazonPage';
import CoastPage from './Pages/CoastPage';
import  Login from './Components/AuthForm';
import FormPage from './Pages/FormPage';
import Cookies from './Components/CookieAlert';
import Footer from './Components/Footer';
import FloatingButton from './Components/FloatingCard';
import PapallactaMain from './Pages/Tours/Papallacta';
import OtavaloS from './Pages/Tours/OtavaloS';
import CotopaxiS from './Pages/Tours/CotopaxiS';
import Mindo from './Pages/Tours/Mindo';
import Quilotoa from './Pages/Tours/Quilotoa';
import CotopaxiH from './Pages/Tours/CotopaxiH';
import Cuyabeno from './Pages/Tours/Cuyabeno';
import Standard from './Pages/Galapagos/Standard';
import Promotional from './Pages/Galapagos/Promotional';
import Aqua from './Pages/Galapagos/Aqua';
import High from './Pages/Galapagos/HighSeason';
//Promotional

import './App.css';



export default class App extends React.Component {
  render(){
    return (
      
      <Router>
       <div>
       <Cookies></Cookies>
       <div>
        {/*https://travel-web-app-rx55-l9r4jaahe-123-code.vercel.app*/}
         <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/peru" element={<PeruPage/>} />
        <Route path="/galapagos" element={<GalapagosPage/>} />
        <Route path="/highlands" element={<HighlandsPage/>} />
        <Route path="/ecuador" element={<EcuadorPage/>} />
        <Route path="/coast" element={<CoastPage/>} />
        <Route path="/amazon" element={<EcuadorPage/>} />
        <Route path="/auth" element={<Login/>}/>
        <Route path="/form" element={<FormPage/>}/>
        <Route path="/papallacta" element={<PapallactaMain/>}/>
        <Route path="/otavalo" element={<OtavaloS/>}/>
        <Route path="/cotopaxis" element={<CotopaxiS/>}/>
        <Route path="/mindo" element={<Mindo/>}/>
        <Route path="/quilotoa" element={<Quilotoa/>}/>
        <Route path="/cotopaxih" element={<CotopaxiH/>}/>
        <Route path="/cuyabeno" element={<Cuyabeno/>}/>
        <Route path="/standard" element={<Standard/>}/>
        <Route path="/high" element={<High/>}/>
        <Route path="/promotional" element={<Promotional/>}/>
        <Route path="/aqua" element={<Aqua/>}/>
        </Routes>
        </div>
        <div>
        <Cookies></Cookies>
       <Navbar/>
       <FloatingButton></FloatingButton>
       <Footer></Footer>
       </div>
       </div>
       </Router>
   );
  }
}

/*
 <Router>
       <Route path="/auth" element={<Login/>} />
        <Routes>
        <Route exact path="/" component={Main} />
       <Route path="/about" component={AboutPage} />
       </Routes>
      </Router>
*/
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
import Payments from './Pages/Payments';
import Footer from './Components/Footer';
import FloatingButton from './Components/FloatingCard';
import PapallactaMain from './Pages/Tours/Papallacta';

import './App.css';



export default class App extends React.Component {
  render(){
    return (
      <Router>
       <div>
       <div>
         <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/peru" element={<PeruPage/>} />
        <Route path="/galapagos" element={<GalapagosPage/>} />
        <Route path="/highlands" element={<HighlandsPage/>} />
        <Route path="/ecuador" element={<EcuadorPage/>} />
        <Route path="/coast" element={<CoastPage/>} />
        <Route path="/amazon" element={<EcuadorPage/>} />
        <Route path="/auth" element={<Login/>} />
        <Route path="/checkout" element={<Payments/>} />
        <Route path="/papallacta" element={<PapallactaMain/>}/>
        </Routes>
        </div>
      <div>
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
        <Routes>
        <Route exact path="/" component={Main} />
       <Route path="/about" component={AboutPage} />
       </Routes>
      </Router>
*/
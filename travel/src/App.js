import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MainPage from './Pages/Main';
import AboutPage from './Pages/About';
import Navbar from './Components/Navbar';
import PeruPage from './Pages/PeruPage';
import GalapagosPage from './Pages/GalapagosPage'; 
import HighlandsPage from './Pages/HighlandsPage';
import EcuadorPage from './Pages/Ecuador';
import CoastPage from './Pages/CoastPage';


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
        </Routes>
        </div>
      <div>
       <Navbar/>
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
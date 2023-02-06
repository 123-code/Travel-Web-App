import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MainPage from './Pages/Main';
import AboutPage from './Pages/About';
import Navbar from './Components/Navbar';

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
import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'
import  Search from './Search'
import Results from './Results'
import './App.css'
import Home from './home'
import Header from './Header '



function App() {
  return ( 
  
    


    


   <BrowserRouter>
      <div>
        <Route path='/' component={Header} />
        <Route exact path="/" component= {Home} />
        <Route exact path="/Search" component= {Search} />
        <Route exact path="/Results" component= {Results} />
     </div>
   
   
   
    </BrowserRouter>
  
  )
      
  
}

export default App;

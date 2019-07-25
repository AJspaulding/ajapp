import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom' // importing route and browserRouter from  react router
// inporting componets into app
import  Dog from './Dog'
import Results from './results'
import './App.css'
import Home from './home'
import Header from './Header '


function App() {
  return ( 
  
    // routes for react app  are named werid because of past failures


   <BrowserRouter>
      <div>
        <Route path='/' component={Header} />
        <Route exact path="/" component= {Home} />
        <Route exact path="/Dog" component= {Dog} />
        <Route exact path="/results" component= {Results} />
        

     </div>
   
   
   
    </BrowserRouter>
  
  )
      
  
}
export default App;
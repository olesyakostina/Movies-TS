import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppContent from '../AppContent';

const  App = () =>{
  return (
    <div className="App">
      <BrowserRouter>
      <AppContent />
      </BrowserRouter>      
    </div>
  );
}

export default App;



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddMovie from './components/pages/AddMovie';

const App = () => {
  return (
    <>
    <div className='min-h-screen bg-white'>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addmovie" element={<AddMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
    
    </>

  );
};

export default App;

import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Router,Link, Form, } from 'react-router-dom';
import Navbar from './Componentes/Navbar/Navbar';
import Inicio from './Componentes/Productos/Inicio';
import Contacto from'./Componentes/Productos/Contacto';
import Productos from'./Componentes/Productos/Productos';


function App () {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/Inicio' element={<Inicio/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='/Productos'element={<Productos/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
  
}

export default App;

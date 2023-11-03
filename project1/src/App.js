import './App.css';
import { BrowserRouter,Navigate, Routes, Route } from 'react-router-dom';

import Slider from './slider';
import NavBar from './nvar';
import Categoria1 from './categoria1';
import Categoria2 from './categoria2';
function App() {
  return (
  <div className="App">  
  <BrowserRouter> 
     <NavBar/> 
      <Routes>
    
           <Route  path='/' element={<Slider/> } /> 
           <Route  path='/slider' element={<Slider/>} />
           <Route path='/categoria1' element={<Categoria1/>} />
           <Route path='/categoria2' element={<Categoria2/>} />
    
       
      </Routes>
  
      
   </BrowserRouter>     
  </div>
  );
}

export default App;

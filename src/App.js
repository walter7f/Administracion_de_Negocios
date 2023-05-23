
import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Portal from './portal/Portal';
import Inicio from './inicio/Inicio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Portal/>}/>
        <Route path='inicio' element={<Inicio/>}/> 
      </Routes>
    </div>
  );
}

export default App;

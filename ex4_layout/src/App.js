import logo from './logo.svg';
import './App.css';
import { Container, Grid2 } from '@mui/material';
import Left from './pages/Left';
import Content from './pages/Content';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';
import Ex3 from './pages/Ex3';
import Ex4_Card from './pages/Ex4_Card';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/Ex1">화면1</Link>
        <Link to="/Ex2">화면2</Link>
        <Link to="/Ex3">화면3</Link>
        <Link to="/Ex4_Card">화면4</Link>
      </nav>

      <Routes>
        <Route path='/Ex1' element={<Ex1/>}></Route>
        <Route path='/Ex2' element={<Ex2/>}></Route>
        <Route path='/Ex3' element={<Ex3/>}></Route>
        <Route path='/Ex4_Card' element={<Ex4_Card/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

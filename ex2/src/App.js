import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Ex5 from './pages/page5';
import Ex6 from './pages/Ex6';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/page1">화면1</Link><br/>
        <Link to="/page2">화면2</Link><br/>
        <Link to="/page3">화면3</Link><br/>
        <Link to="/page4">화면4</Link><br/>
        <Link to="/page5">화면5</Link><br/>
        <Link to="/Ex6">화면6</Link><br/>
        
      </nav>
      <Routes>
        <Route path="/page1" element={<Page1/>}/>
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/page3" element={<Page3/>}/>
        <Route path="/page4" element={<Page4/>}/>
        <Route path="/page5" element={<Ex5 year={2025} str='강호현'/>}/> 
        <Route path="/Ex6" element={<Ex6/> }/>
        
        {/* ex5가 생성될 때 인자 전달해줌줌 */}
        
      </Routes>
    </div>
  );
}

export default App;

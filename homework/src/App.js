import logo from './logo.svg';
import './App.css';
import Left from './pages/left';
import Right from './pages/right';
import { Container, Grid2 } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid2 container>
            <Grid2 size={2}>
               <Left/>
            </Grid2>
            <Grid2 size={10}>
                <Right/>
            </Grid2>
        </Grid2>
          
      </Container>
        
    </div>
  );
}

export default App;

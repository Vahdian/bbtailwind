
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './shared/navbar/Navbar';
import Routes from './core/routes/Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

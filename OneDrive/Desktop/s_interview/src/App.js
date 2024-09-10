import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login';
import Main from './component/main';
import Register from './component/register'; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Register/>} /> 
        <Route path='/login' element={<Login/>} />
        <Route path='/main' element={<Main/>} />
      </Routes>
      
    </div>
  );
}

export default App;

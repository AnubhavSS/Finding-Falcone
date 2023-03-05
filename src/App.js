
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeadFoot from './Components/HeadFoot';
import Home from './Components/Home';
import Result from './Components/Result';

function App() {
  return (
    <div >
     
      <BrowserRouter>
      <HeadFoot/>
      <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path='/result' element={<Result/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

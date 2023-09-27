
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Registreation  from './components/Registreation';
import {useState} from 'react';
function App() {
  const [user,setLoginUser] = useState({

  })
  return (
    <div className="App">
      <BrowserRouter>
<Routes>
  
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/" element={<Registreation/>}></Route>
</Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

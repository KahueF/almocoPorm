
import {Route, Routes, BrowserRouter} from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import Keyboard from "./pages/keyboard";
import Dados from "./pages/dados/dados.js";





export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/keyboard" element={<Keyboard/>}/>
        <Route path="/dados" element={<Dados/>}/>
      </Routes>
    </BrowserRouter>
  )
}



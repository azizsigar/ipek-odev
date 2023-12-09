import { Routes, Route } from "react-router-dom";
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Singin } from "./pages/Singin";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/singin" element={<Singin/>} />
      </Routes>
          </div>
  );
}

export default App;

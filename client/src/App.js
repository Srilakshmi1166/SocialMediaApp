
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Register from './components/RegisterForm.js';
import Profile from './components/Profile.js';
import Login from './components/LoginForm.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route element={<Navbar />}>
      <Route path="Home" element={<Home/>} />
      <Route path="Register" element={<Register/>}/>
      <Route Path="Profile" element={<Profile/>}/>
      <Route path="Login" element={<Login/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

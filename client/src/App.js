
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/LoginForm.js";
import Register from "./components/RegisterForm.js";
import Navbar from './components/Navbar.js';
import Profile from './components/Profile.js'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              <Route path= "navigation" element={<Profile />}/>
              <Route path="books" element={<Register/>}/>
              <Route path="register" element={<Login />}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

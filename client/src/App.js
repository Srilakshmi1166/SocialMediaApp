
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar.js';
import Register from './components/pages/RegisterForm.js';
import Profile from './components/pages/Profile.js';
import Login from './components/pages/LoginForm.js';
import PostForm from './components/pages/PostForm.js';
import { UserProvider } from './components/pages/UserContext.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserProvider>
      <Routes>
      <Route element={<Navbar />}>
      <Route index element={<Home/>} />
      <Route path="Register" element={<Register/>}/>
      <Route path="Profile" element={<Profile/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="PostForm" element={<PostForm/>}/>
      </Route>
      </Routes>
      </UserProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

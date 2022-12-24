import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Signin from './Components/Signin';
import CreateProfile from './Components/Createprofile';
import Postcard from './Components/Postcard';
import Profile from './Components/Profile';
import ShowPostcard from './Components/ShowPostcard';
import Signup from './Components/Signup';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       
      <Router>
    
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/signin" element={<Signin/>} />
      <Route  path="/signup" element={<Signup/>} />
      <Route  path="/createprofile" element={<CreateProfile/>} />
      <Route  path="/show" element={<ShowPostcard/>} />
      <Route  path="/profile" element={<Profile/>} />
      <Route  path="/postcard" element={<Postcard/>} />
        
     
      </Routes>
  </Router>
        
      </header>
    </div>
  );
}

export default App;

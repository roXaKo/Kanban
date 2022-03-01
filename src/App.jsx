import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Routes/Home";
import NewItem from './Routes/NewItem';
import Archive from './Routes/Archive';
import Footer from "./components/Footer";

function App() {
  return (
    <div >
      <NavBar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addItem" element={<NewItem />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        
      <Footer/>
    </div>
  );
}

export default App;

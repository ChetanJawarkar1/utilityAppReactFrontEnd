import React from 'react';
import './App.css';
import { BrowserRouter, Routes,RouteMatch, Route,  Link  } from "react-router-dom";
import Create from './components/Create';
import DemoHome from './components/DemoHome';
import { Component } from 'react/cjs/react.production.min';
import About from './components/About';
import Read from './components/Read';
import Update from './components/Update';
import LoginPage from './components/LoginPage';
import Login from './components/Login';
import LoginContainer from './components/LoginContainer';
import './index.css';


const rootElement = document.getElementById("root");

function App(){
   return (
    <div className="App">
       <h1 className="body">Welcome too Chetan Dashboard</h1>
       
        <div className="App-header">
          <Routes>
          <Route path="/" element={<DemoHome/>}/>

          <Route path="/login" element={<LoginPage/>}/>

          <Route path="/login1" element={<Login/>}/>
          
          <Route path="/create" element={<Create/>}/>
        
          <Route path="/about" element={<About/>}/>

          <Route path="/read" element={<Read/>}/>

          <Route path="/update" element={<Update/>}/>

                    
          </Routes>
        </div>
      </div>
  ); }

export default App;


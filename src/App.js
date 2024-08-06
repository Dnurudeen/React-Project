import React from 'react';

import './App.css';
import Nav from './components/Nav';
import { Link } from "react-router-dom";


function App() {
  return (
    <body>
      <header>
        <Nav></Nav>
        {/* <Link to='/about'>About</Link> */}
        <h1>Home Page</h1>
      </header>
    </body>
  );
}

export default App;

import React from 'react';

import './App.css';
import Nav from './components/Nav';
import { Link } from "react-router-dom";
import Hello from './components/Hello';


function App() {
  return (
    <body>
      <header>
        <Nav></Nav>
        {/* <Link to='/about'>About</Link> */}

        <Hello name="Kunle Mike" message="Good Day" emoji="👋🏼"></Hello>

        <h1>Home Page</h1>
      </header>
    </body>
  );
}

export default App;

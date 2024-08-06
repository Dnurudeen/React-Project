// src/pages/About.js
import React from 'react';
import Nav from '../components/Nav';

function NotFound() {
  return(
    <div>
        <Nav></Nav>
        <div className='text-center my-5'>
           <h1>404 - Page Not Found</h1>
        </div>
    </div>
  )
}

export default NotFound;

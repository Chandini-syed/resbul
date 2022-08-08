
import React from 'react';
import logo from '../logo (1).png';


function Header() {
  return (
    <div class="container-fluid">
    <nav class="navbar navbar-expand-md bg-light">
   
      
    <img src={logo} className="App-logo" alt="logo" />
      <ul class="nav navbar-nav navbar-right">
      <li class="nav-item"><a class="nav-link" href="#">Resume Templates</a></li>
      <li class="nav-item"><a class="nav-link" href="#">My Resumes</a></li> 
      <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>  
      </ul>
    
  </nav>
  </div>

  );
}

export default Header;
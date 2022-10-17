import { useState } from 'react';
import React from 'react';

function Navbar(){
  
    const [navbar,setNavbar] = useState(false);
  const changeNavbarBackground = () =>{
    // console.log(window.scrollY)
    if(window.scrollY >= 100){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  };
  
  window.addEventListener('scroll',changeNavbarBackground);
  
  };

  export default Navbar;
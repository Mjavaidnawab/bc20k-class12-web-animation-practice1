import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";


function C_MyEducation() {

  const { ref, playState } = useWebAnimations({
    keyframes: {
      transform: ["translateX(650px)"], // Move by 500px
      //background: ["red", "blue", "green"], // Go through three colors
    },
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 10800, // Run for 1000ms
      iterations: 5, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    
  });

  return (
      <div className='target_image' ref={ref} >
        
        <h3>I am Computer Science Graduate, Microsoft Certified Solutions Associate in Windows Server 2016</h3> 
               
      </div>

  );
}

export default C_MyEducation;

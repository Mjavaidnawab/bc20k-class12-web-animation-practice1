import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";


function D_MyEducation() {

  const { ref, playState } = useWebAnimations({
    keyframes: {
      transform: ["translateX(740px)"], // Move by 500px
      //background: ["red", "blue", "green"], // Go through three colors
    },
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 10800, // Run for 1000ms
      iterations: 7, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    
  });

  return (
      <div className='target_image' ref={ref} >
        
        
        <h3>Google Certified in Digital Marketing, Udemy Certified in Machine Learning using Python</h3>
        
      </div>

  );
}

export default D_MyEducation;

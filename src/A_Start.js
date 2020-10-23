import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations  from "@wellyshen/use-web-animations";


function A_Start() {

  const { ref, playState } = useWebAnimations({
    keyframes: {
      transform: ["translateX(760px)"], // Move by 500px
      //background: ["red", "blue", "green"], // Go through three colors
    },
    timing: {
      delay: 200, // Start with a 500ms delay
      duration: 10000, // Run for 1000ms
      iterations: 2,// Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
        
 
  });

  return (
    <div>
      <div className='target' ref={ref}>
        <h1>In the Name of Allah, Most Gracious Most Merciful</h1>
  
      </div>


    </div>
  );
}

export default A_Start;

import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";


function B_MyName() {

  const { ref, playState } = useWebAnimations({
    keyframes: {
      transform: ["translateX(500px)"], // Move by 500px
      //background: ["red", "blue", "green"], // Go through three colors
    },
    timing: {
      delay: 400, // Start with a 500ms delay
      duration: 10500, // Run for 1000ms
      iterations: 4, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
 
  });

  return (
    <div>
      <div className='target' ref={ref}>
        <h1>I am Muhammad Javaid Nawab, father of two Mustafa and Maryam</h1>
      </div>


    </div>
  );
}

export default B_MyName;

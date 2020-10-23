import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations, {bounce } from "@wellyshen/use-web-animations";


function F_WebAnimation() {

      const { ref, playState, getAnimation } = useWebAnimations({...bounce}); 


  
  return (
      <div className='target_image' ref={ref} >
        
        
        <h3>WEB ANIMATION API IN REACT JAVASCRIPT</h3>
        
      </div>

  );
}

export default F_WebAnimation;

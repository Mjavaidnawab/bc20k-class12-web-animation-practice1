import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations, {flash} from "@wellyshen/use-web-animations";


function F_WebAnimation() {

      const { ref, playState, getAnimation } = useWebAnimations({...flash}); 


  
  return (
      <div className='target_image' ref={ref} >
        
        
        <h3>WEB DEVELOPMENT : REACT JAVASCRIPT, HTML, CSS</h3>
        
      </div>

  );
}

export default F_WebAnimation;

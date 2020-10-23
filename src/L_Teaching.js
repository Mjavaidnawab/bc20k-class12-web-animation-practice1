import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations, {rollIn} from "@wellyshen/use-web-animations";


function L_Teaching() {

      const { ref, playState, getAnimation } = useWebAnimations({...rollIn}); 


  
  return (
      <div className='target_image' ref={ref} >
        
        
        <h3>I LOVE TO HELP, TEACH, GUIDE</h3>
        
      </div>

  );
}

export default L_Teaching;

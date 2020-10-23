import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations, {rotateInDownLeft} from "@wellyshen/use-web-animations";


function I_ITAdministrator() {

      const { ref, playState, getAnimation } = useWebAnimations({...rotateInDownLeft}); 


  
  return (
      <div className='target_image' ref={ref} >
        
        
        <h3>GOOGLE G-SUITE ADMINISTRATION</h3>
        
      </div>

  );
}

export default I_ITAdministrator;

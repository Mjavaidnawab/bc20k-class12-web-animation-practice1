import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations, {rotateInUpRight} from "@wellyshen/use-web-animations";


function J_Azure() {

      const { ref, playState, getAnimation } = useWebAnimations({...rotateInUpRight}); 


  
  return (
      <div className='target_image' ref={ref} >
        
        
        <h3>MICROSOFT AZURE ADMINISTOR</h3>
        
      </div>

  );
}

export default J_Azure;

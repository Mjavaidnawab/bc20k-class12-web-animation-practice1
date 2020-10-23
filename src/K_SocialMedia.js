import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations, {rotateIn} from "@wellyshen/use-web-animations";


function J_Azure() {

      const { ref, playState, getAnimation } = useWebAnimations({...rotateIn}); 


  
  return (
      <div className='target_image' ref={ref} >
        
        
        <h3>SOCIAL MEDIA MANAGER: FACEBOOK BUSINESS, GOOGLE BUSINESS, TWITTER </h3>
        
      </div>

  );
}

export default J_Azure;

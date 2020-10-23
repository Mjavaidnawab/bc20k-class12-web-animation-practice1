import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations, {bounceIn} from "@wellyshen/use-web-animations";


function I_ITAdministrator() {

      const { ref, playState, getAnimation } = useWebAnimations({...bounceIn}); 


  
  return (
      <div className='target_image' ref={ref} >
        
        
        <h3>IT ADMINISTRATION,  WEB HOSTING, ACRONIS CLOUD BACKUP</h3>
        
      </div>

  );
}

export default I_ITAdministrator;

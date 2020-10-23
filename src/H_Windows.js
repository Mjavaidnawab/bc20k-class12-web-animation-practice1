import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations, {backInDown} from "@wellyshen/use-web-animations";


function H_Windows() {

      const { ref, playState, getAnimation } = useWebAnimations({...backInDown}); 


  
  return (
      <div className='target_image' ref={ref} >
        
        
        <h3>WINDOWS SERVER 2016 : MCSA EXAM 70-740 PASSED</h3>
        
      </div>

  );
}

export default H_Windows;

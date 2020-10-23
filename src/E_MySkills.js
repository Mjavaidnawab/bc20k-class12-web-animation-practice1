import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import F_WebAnimation from './F_WebAnimation';
import G_WebDevelopment from './G_WebDevelopment';
import H_Windows from './H_Windows';
import I_ITAdministrator from './I_ITAdministrator';
import J_Azure from './J_Azure';
import J_GoogleCloud from './J_GoogleCloud';
import K_SocialMedia from './K_SocialMedia';
import L_Teaching from './L_Teaching';
import M_ContactMe from './M_ContactMe';

function E_MySkills() {

  const { ref, playState } = useWebAnimations({
    keyframes: {
    transform: ["translateX(740px)"], // Move by 500px

 
    },
    timing: {
      delay: 10000, // Start with a 500ms delay
      duration: 12800, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    
  });

  return (
      <div className='target_image' ref={ref} >
        
        
        <h2> SKILLS</h2>

        <F_WebAnimation />
        
        <G_WebDevelopment />
        <H_Windows />
        <I_ITAdministrator />
        <J_Azure />
        <J_GoogleCloud />
        <K_SocialMedia />
        <L_Teaching />
        <M_ContactMe />
        
      </div>

  );
}

export default E_MySkills;

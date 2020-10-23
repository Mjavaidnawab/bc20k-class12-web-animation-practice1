import React, { useRef, useEffect } from 'react';
import './App.css';
import useWebAnimations, {flash} from "@wellyshen/use-web-animations";


function M_ContactMe() {

      const { ref, playState, getAnimation } = useWebAnimations({...flash}); 


  
  return (
      <div className='target_image' ref={ref} >
        
        
        <h5>CONTACT ME I AM IN UAE LOOKING FOR JOB</h5>
           
        <li>E-Mail       : Javaid.vg@gmail.com</li>
        <li>WhatsApp     : +971 55 329 3695</li>
        <a href="https://www.linkedin.com/in/mjavaidnawab">My LinkedIn</a>
        <a href="https://github.com/Mjavaidnawab"> My Github</a>
        <a href="https://www.facebook.com/javaid.nawab.311">My Facebook</a>
        
    
       
            <a href="http://bc20k-class01.surge.sh/">. React Apps .</a>
            <a href="http://bc20k-class2-base-r-app.surge.sh/">. Base App .</a>
            <a href="http://bc20k-class3-demo-app.surge.sh/">. Proj 3 .</a>
            <a href="http://onoffbutton-temp-javaidnawab.surge.sh/">. States .</a>
            <a href="http://bc20k-class5-context.surge.sh/">. Context API .</a>
            <a href=" http://bc20k-class6-exptracker.surge.sh/">. Exp Tracker .</a>
            <a href="http://bc20k-class8-demo-fetch.surge.sh">. Fetch .</a>
            <a href="http://bc20k-class10-covid19-tracker.surge.sh">. Covid App.</a>
            <a href="http://bc20k-javaidnawab-project4.surge.sh/"> . Red Queen .</a>
            <a href="http://bc20kjavaidnawab-project4b.surge.sh/">Animation</a>
            <a href="http://javaidnawab-project5.surge.sh">Web Anim</a>
            <a href="http://bc20k-javaidnawab-project6-quiz.surge.sh/" >Quiz App</a>
 
      </div>

  );
}

export default M_ContactMe;

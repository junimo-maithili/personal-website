import './App.css'
import { useEffect, useRef } from "react";
import ExperienceItem from './components/ExperienceItem'
import resume from './assets/resume.pdf'
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import myImg from "./assets/myImg.JPG"

function App() {

  /* Typing animation for name */
  const el = useRef<HTMLSpanElement>(null);
    useEffect(() => {
      const typed = new Typed(el.current!, {
        strings: ["Maithili Rastogi"],
        typeSpeed: 80,
        backSpeed: 0,
      });
    
      return () => {
        typed?.destroy();
      };
    }, []);

  


AOS.init({
  duration: 800,
  once: true
});

  return (
    <>
     
     <div>
      
     <h1><span ref={el}></span></h1>;
     <div className="contactLinks">
      <a href="https://github.com/junimo-maithili">github</a>
      <a href="https://www.linkedin.com/in/maithili-rastogi-982938302/">linkedin</a>
      <a href={resume} target="_blank" rel="noopener noreferrer">resumé</a>
     </div>
     <br/>

    <div className="myImgDiv">
      <img className="smallImg" src="https://i.pinimg.com/736x/1c/a8/f0/1ca8f048104218a51287a1441b7eaeac.jpg"></img>
      <img className="myImg" src={myImg}></img>
      <img className="smallImg" src="https://i.pinimg.com/736x/1c/a8/f0/1ca8f048104218a51287a1441b7eaeac.jpg"></img>
    </div>


        <div className="aboutMe" data-aos="flip-right">
          <h2>About Me</h2>
          <p>I'm Maithili, and I'm a grade 12 student in Halton. I'm interested in drawing, gaming, and spending time with my friends!</p>
        </div>
        <div className="experience" data-aos="flip-left">
          <h2>Experience</h2>
          
          <ExperienceItem />
          <ExperienceItem />
          <ExperienceItem />
        </div>

        <div className="projectDiv" data-aos="flip-right">
          <h2>Projects</h2>
 
          <div className="projects">
            <div>
              <a href="https://github.com/junimo-maithili/grind-track">GrindTrack</a>
              <img src="https://zeldauniverse.net/wp-content/uploads/2018/05/C6W-oTOWYAA1R-K-700x500.jpg"></img>
              <p>A Google Chrome extension that keeps track of time you've spent on "productive websites" that you set!</p>
              <a href="https://github.com/junimo-maithili/grind-track"></a>
            </div>

            <div>
              <a href="https://github.com/junimo-maithili/grind-track">GrindTrack</a>
              <img src="https://zeldauniverse.net/wp-content/uploads/2018/05/C6W-oTOWYAA1R-K-700x500.jpg"></img>
              <p>A Google Chrome extension that keeps track of time you've spent on "productive websites" that you set!</p>
              <a href="https://github.com/junimo-maithili/grind-track"></a>
            </div>

            <div>
              <a href="https://github.com/junimo-maithili/grind-track">GrindTrack</a>
              <img src="https://zeldauniverse.net/wp-content/uploads/2018/05/C6W-oTOWYAA1R-K-700x500.jpg"></img>
              <p>A Google Chrome extension that keeps track of time you've spent on "productive websites" that you set!</p>
              <a href="https://github.com/junimo-maithili/grind-track"></a>
            </div>
          </div>
        </div>

        
    
      </div>
      
   
    </>
  )
}

export default App

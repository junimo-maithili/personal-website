import './App.css'
import { useEffect, useRef } from "react";
import Sparkle from './components/Sparkle'
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import myImg from "./assets/myImg.jpg"
import resume from './assets/resume.pdf'
import grindTrackImg from "./assets/grindTrackImg.png"
import tamagotchiImg from "./assets/tamagotchiImg.png"
import birthdayCardImg from "./assets/birthdayCardImg.png"

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

  /* Flipping animations using AOS */
  AOS.init({
    duration: 1300,
    once: true
  });


  return (
    <>
     
      <div className="container">

        <h1><span ref={el}></span></h1>;
        <div className="contactLinks">
          <a href="https://github.com/junimo-maithili">github</a>
          <a href="https://www.linkedin.com/in/maithili-rastogi-982938302/">linkedin</a>
          <a href={resume} target="_blank" rel="noopener noreferrer">resumé</a>
        </div>

        <div className="sparkleDiv">
          <Sparkle styling={{ xPos : 5, yPos: 8, fontSize: 50 }} />
          <Sparkle styling={{ xPos : 75, yPos: 68, fontSize: 40 }} />
          <Sparkle styling={{ xPos : 60, yPos: 67, fontSize: 15 }} />
          <Sparkle styling={{ xPos : 32, yPos: 19, fontSize: 30 }} />
          <Sparkle styling={{ xPos : 10, yPos: 34, fontSize: 15 }} />
          <Sparkle styling={{ xPos : 25, yPos: 80, fontSize: 25 }} />
          <Sparkle styling={{ xPos : 80, yPos: 10, fontSize: 25 }} />
        </div>


        <br/>

        <div className="myImgDiv">
          <img className="smallImg" src="https://i.pinimg.com/736x/1c/a8/f0/1ca8f048104218a51287a1441b7eaeac.jpg"></img>
          <img className="myImg" src={myImg}></img>
          <img className="smallImg" src="https://i.pinimg.com/736x/1c/a8/f0/1ca8f048104218a51287a1441b7eaeac.jpg"></img>
        </div>


            <div className="aboutMe" data-aos="flip-right">
              <h2>About Me</h2>
              <p>I'm Maithili, and I'm a grade 12 student at White Oaks Secondary School. I love drawing, gaming, and spending time with my friends!</p>
            </div>
            <div className="experience" data-aos="flip-left">
              <h2>Experience</h2>

              <div className="experienceItem">
                <h3>Girls Leading in Stem Club Senior Executive</h3>
                <p>Oct. 2023 -- Present</p>
                <ul>
                  <li>Increased meeting attendance generating interest in the club through posting stories on Instagram and delivering presentations about diverse topics in STEM</li>
                  <li>Raised awareness about underrepresented groups in STEM by leading discussions on the challenges women face in STEM fields</li>
                </ul>
              </div>

              <div className="experienceItem">
                <h3>DECA Member</h3>
                <p>Oct. 2023 -- Present</p>
                <ul>
                  <li>Placed 1st and 2nd out of 70 students in consecutive years at the Hamilton regional case competition</li>
                  <li>Two-time provincial finalist (top 130 participants) for ability to overcome unexpected hurdles in business scenarios through problem-solving, communication, and public speaking skills</li>
                </ul>
              </div>
              
              <div className="experienceItem">
                <h3>Co-Director of STEM from Scratch</h3>
                <p>Nov. 2024 -- Present</p>
                <ul>
                  <li>Leads an organization dedicated to providing access to STEM opportunities to students, primarily in elementary school through newsletters and workshops</li>
                  <li>Designed workshops to introduce students to Python and Scratch, and guided them through training a machine learning model using Google Teachable Machine</li>
                </ul>
              </div>
            </div>

            <div className="projectDiv" data-aos="flip-right">
              <h2>Projects</h2>
    
              <div className="projects">
                <div>
                  <a href="https://github.com/junimo-maithili/grind-track">GrindTrack</a>
                  <img src={grindTrackImg}></img>
                  <p>A Google Chrome extension that keeps track of time you've spent on "productive websites" that you set.</p>
                  <a href="https://github.com/junimo-maithili/grind-track"></a>
                </div>

                <div>
                  <a href="https://github.com/junimo-maithili/grind-track">Tamagotchi</a>
                  <img src={tamagotchiImg}></img>
                  <p>A Google Chrome extension where you can take care of a pet by feeding it, petting it, and playing games with it!</p>
                </div>

                <div>
                  <a href="https://github.com/junimo-maithili/birthday-card">Birthday Card</a>
                  <img src={birthdayCardImg}></img>
                  <p>A simple birthday card I made.</p>
                </div>

            </div>
          </div>
        </div>
      
   
    </>
  )
}

export default App

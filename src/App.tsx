import './App.css'
import { useEffect, useRef, useState } from "react";
import Sparkle from './components/Sparkle'
import Music from './components/Music'
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import myImg from "./assets/myImg.jpg"
import resume from './assets/resume.pdf'
import report from './assets/basef2025Report.pdf'
import grindTrackImg from "./assets/grindTrackImg.png"
import tamagotchiImg from "./assets/tamagotchiImg.png"
import basefImg from "./assets/basefImg.jpg"
import birthdayCardImg from "./assets/birthdayCardImg.png"
import fuecocoSideImg from "./assets/fuecocoSideImg.png"
import sharkSideImg from "./assets/sharkSideImg.jpg"


function App() {

  // UseState hooks
  const [paused, setPaused] = useState(false);

  // Typing animation for name
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

  // Music toggle
  function toggleMusic() {
    const musicPlayer = document.getElementById('musicDiv');
    if (!musicPlayer) return;
    musicPlayer.style.display = (musicPlayer.style.display === 'none') ? 'block' : 'none';
  }

  // Initialize scrolling animations using AOS
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    });
  }, []);

  // Scrolling projects
  const allProjectsRef = useRef<HTMLDivElement>(null);
  const hasClonedRef = useRef(false);

  function createClones () {
    // Don't animate on mobile or for users with preferred reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;

    const allProjects = allProjectsRef.current;
    if (!allProjects || hasClonedRef.current) return;

    allProjects.setAttribute("animated", "true");

    const projects = Array.from(allProjects.querySelectorAll(".project")) as HTMLElement[];
    if (projects.length === 0) {
      allProjects.setAttribute("animated", "false");

    };
    
    projects.forEach(project => {
      const clone = project.cloneNode(true) as HTMLElement;
      allProjects.appendChild(clone);
      clone.setAttribute("cloned", "true");
    });

    hasClonedRef.current = true;
  }


  // Create clones on load
  useEffect(() => {
    createClones();
  }, []);

  // Pause button for projects
  function pauseButton() {
    const allProjects = allProjectsRef.current;
    if (!allProjects) return;
  
    if (allProjects.getAttribute("animated") === "false") {
      allProjects.setAttribute("animated", "true");
      createClones();
      setPaused(false);

    } else {
      allProjects.setAttribute("animated", "false");
      const clones = Array.from(allProjects.querySelectorAll('[cloned="true"]'));
      clones.forEach(clone => clone.remove());
      setPaused(true);
    }
  }

  
  return (
    <>
      <div className="container">

        <div className="name">
          <h1><span ref={el}></span></h1>
          <div className="contactLinks">
            <a href="https://github.com/junimo-maithili">github</a>
            <a href="https://www.linkedin.com/in/maithili-rastogi-982938302/">linkedin</a>
            <a href={resume} target="_blank" rel="noopener noreferrer">resumé</a>
          </div>
        </div>

        <div className="sparkleDiv">
          <Sparkle styling={{ xPos : 5, yPos: 8, fontSize: 50 }} />
          <Sparkle styling={{ xPos : 75, yPos: 68, fontSize: 40 }} />
          <Sparkle styling={{ xPos : 60, yPos: 67, fontSize: 15 }} />
          <Sparkle styling={{ xPos : 32, yPos: 19, fontSize: 30 }} />
          <Sparkle styling={{ xPos : 10, yPos: 34, fontSize: 15 }} />
          <Sparkle styling={{ xPos : 25, yPos: 80, fontSize: 25 }} />
          <Sparkle styling={{ xPos : 60, yPos: 10, fontSize: 25 }} />
          <Sparkle styling={{ xPos : 80, yPos: 25, fontSize: 15 }} />
        </div>
        <br/>

        <div className="myImgDiv">
          <img className="sideImg" src={fuecocoSideImg} data-aos="fade-up"></img>
          <img className="myImg" src={myImg} data-aos="fade-up"></img>
          <img className="sideImg" src={sharkSideImg} data-aos="fade-up"></img>
        </div>

        <div className="backCard" id="aboutMeDiv" data-aos="flip-right">
        <button type="button" className="musicButton" onClick={toggleMusic}>cue the music!</button>
        <Music />
          <h2>₊˚⊹⋆ Hi, I'm Maithili! ⋆⭒˚｡⋆</h2>
          <p>I'm a grade 12 student in Halton. I love drawing, gaming, and spending time with my friends!</p>
        </div>

        <div className="backCard" id="experienceDiv" data-aos="flip-left">
          <h2>⋆˚｡⋆ Experience ⋆˚｡⋆</h2>

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

        <div className="backCard" id="awardsDiv" data-aos="flip-right">
          <h2>⋆｡‧˚ʚ Awards ɞ˚‧｡⋆</h2>

          <div className="award">
            <h3>DECA Awards</h3>
            <p>November 2023 — February 2025</p>
            <ul>
              <li>Placed 1st and 2nd out of 70 students in consecutive years at the Hamilton regional case competition</li>
              <li>Two-time provincial finalist (top 130 participants) for ability to overcome unexpected hurdles in business scenarios through problem-solving, communication, and public speaking skills</li>
            </ul>
          </div>

          <div className="award">
              <h3>Mohawk-Sheridan Award of Excellence Award</h3>
              <p>March 2023 — 2024</p>
              <ul>
                <li>Received Bronze Mohawk-Sheridan Award of Excellence Award in consecutive years for science fair displays on solar cells</li>
              </ul>
          </div>

          <div className="award">
              <h3>UTHSDC Fourth Place Award</h3>
              <p>November 2024</p>
              <ul>
                <li>Team achieved fourth place in the University of Toronto High School Design Competition for solution to civil engineering case study</li>
              </ul>
          </div>
        </div>

        <div className="backCard" id="projectDiv" data-aos="flip-left">
          <h2>⋆˚✿˖° Projects ｡𖦹°‧</h2>
          <button type="button" className="pauseButton" onClick={pauseButton}>{paused ? "go ahead!" : "let me scroll!"}</button>
          <p className="scrollLabel">Scroll ˋ°•*⁀➷</p>

          <div className="projectsWrapper">
            <div className="allProjects" ref={allProjectsRef}>
              <div className="project">
                <a href="https://github.com/junimo-maithili/grind-track">GrindTrack</a>
                <img src={grindTrackImg}></img>
                <p>A Google Chrome extension that keeps track of time you've spent on "productive websites" that you set.</p>
                <a href="https://github.com/junimo-maithili/grind-track"></a>
              </div>

              <div className="project">
                <a href={report} target="_blank" rel="noopener noreferrer">BASEF 2025</a>
                <img src={basefImg}></img>
                <p>A report I worked on with a partner investigating the most efficient type of dye to use in Dye-Sensitized Solar Cells.</p>
              </div>

              <div className="project">
                <a href="https://github.com/junimo-maithili/grind-track">Tamagotchi</a>
                <img src={tamagotchiImg}></img>
                <p>A Google Chrome extension where you can take care of a pet by feeding it, petting it, and playing games with it!</p>
              </div>

              <div className="project">
                <a href="https://github.com/junimo-maithili/birthday-card">Birthday Card</a>
                <img src={birthdayCardImg}></img>
                <p>A silly little birthday card I made!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="backCard" id="contactMeDiv" data-aos="flip-right">
            <h2>⋆ 𖤓 Contact Me! ⋆˚࿔</h2>
            <p>Feel free to email me at <a className="emailLink" href="mailto:rastogim2948@gmail.com"> rastogim2948@gmail.com</a> :)</p>
        </div>
      </div>
    </>
  )
}

export default App

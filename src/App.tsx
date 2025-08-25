import './App.css'
import ExperienceItem from './components/ExperienceItem'
import resume from './assets/resume.pdf'

function App() {

  return (
    <>
     
     <div>
     <h1>Maithili Rastogi</h1>
     <div className="contactLinks">
      <a href="https://github.com/junimo-maithili">git</a>
      <a href="https://www.linkedin.com/in/maithili-rastogi-982938302/">linkedin</a>
      <a href={resume} target="_blank" rel="noopener noreferrer">resume</a>
     </div>
     <br/>

        <img src="https://i.pinimg.com/736x/1c/a8/f0/1ca8f048104218a51287a1441b7eaeac.jpg"></img>


        <h2>About Me</h2>
        <p>My name is Maithili Rastogi, and I'm a grade 12 student in Halton. I'm interesting in drawing, reading, and spending time with my friends!</p>
        
        <h2>Experience</h2>
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />

        <h2>Projects</h2>
        <div className="projects">
          <div>
            <h3>GrindTrack</h3>
            <img src="https://zeldauniverse.net/wp-content/uploads/2018/05/C6W-oTOWYAA1R-K-700x500.jpg"></img>
            <p>A Google Chrome extension that keeps track of time you've spent on "productive websites" that you set!</p>
            <a href="https://github.com/junimo-maithili/grind-track"></a>
          </div>

          <div>
            <h3>GrindTrack</h3>
            <img src="https://zeldauniverse.net/wp-content/uploads/2018/05/C6W-oTOWYAA1R-K-700x500.jpg"></img>
            <p>A Google Chrome extension that keeps track of time you've spent on "productive websites" that you set!</p>
            <a href="https://github.com/junimo-maithili/grind-track"></a>
          </div>

          <div>
            <h3>GrindTrack</h3>
            <img src="https://zeldauniverse.net/wp-content/uploads/2018/05/C6W-oTOWYAA1R-K-700x500.jpg"></img>
            <p>A Google Chrome extension that keeps track of time you've spent on "productive websites" that you set!</p>
            <a href="https://github.com/junimo-maithili/grind-track"></a>
          </div>
        </div>
    
      </div>
   
    </>
  )
}

export default App

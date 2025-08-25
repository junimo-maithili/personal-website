import './App.css'
import ExperienceItem from './components/ExperienceItem'
import resume from './assets/resume.pdf'

function App() {

  return (
    <>
     
     <div>
     <h1>Maithili Rastogi</h1>
     <a href="https://github.com/junimo-maithili">git</a>
     <a href="https://www.linkedin.com/in/maithili-rastogi-982938302/">linkedin</a>
     <a href={resume} target="_blank" rel="noopener noreferrer">resume</a>

        <img src="https://i.pinimg.com/736x/1c/a8/f0/1ca8f048104218a51287a1441b7eaeac.jpg"></img>


        <h2>About Me</h2>
        <p>My name is Maithili Rastogi, and I'm a grade 12 student in Halton. I'm interesting in drawing, reading, and spending time with my friends!</p>
        
        <h2>Experience</h2>
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
        
    
      </div>
   
    </>
  )
}

export default App

import './App.css';
import profilepic from './images/profile.png';
import githubLogo from './images/githubBlack.png';
import linkedinLogo from './images/linkedinBlack.png';
import resume from './docs/resume.pdf';


function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <p className="Navigation">🚧 The website is currently under construction! 🚧</p>
      </div>
      
      <header className="App-header">
      
      <img className="Profile-pic" src={profilepic} alt="Profile of Matthew" />
    
      <div className="Greetings">
        Hi, I'm Matthew Lam. 👋 
      </div>
      <div className="Intro-text">
        <p>
        I'm a 3rd year Computer Science from the University of Waterloo interested in product design, software architecture and project management. 
        Some of my hobbies include bouldering 🧗🏻, power lifting 🏋🏻‍♂️, playing video games 🎮, and listening to podcasts 🎙️. 
        If you want to get in touch, you can contact me with any of the social media links on the site.
        </p>
      </div>

      <a href={resume}> <button className="Resume-button">View Resume</button></a>

      <div className="Contact">
        <a href={"https://github.com/matthewtlam"}>
          <img className="Contact-icon" src={githubLogo} alt="Github"/>
        </a>
        
        <a href={"https://www.linkedin.com/in/matthewtlam/"} style={{ marginLeft: '1vw' }}>
          <img className="Contact-icon" src={linkedinLogo} alt="LinkedIn"/>
        </a>
      </div>
      </header>
    </div>
  );
}

export default App;

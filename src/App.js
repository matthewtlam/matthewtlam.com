import './App.css';
import profilepic from './matthewprofile.png';
import resume from './MatthewLamResume.pdf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className="Profile-pic" src={profilepic} alt="Profile Picture" />
        <p>
          Hi, I'm Matthew Lam
        </p>
      
        <p>
        I'm a third year Computer Science from the University of Waterloo interested in product design, software architecture and project management. 
        </p>
        <p>
        Some of my hobbies include bouldering, power lifting, playing video games and listening to podcasts. 
        </p>
        <p>
        If you want to get in touch, you can contact me with any of the social media links on the site.
        </p>

        <div className = "App">
          <a href = {resume}> <button>View Resume</button></a>
        </div>
        
        
      </header>
    </div>
  );
}

export default App;

import './App.css';
import profilepic from './matthewprofile.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={profilepic} alt="Profile Picture" />
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
        
        
      </header>
    </div>
  );
}

export default App;

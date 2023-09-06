import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Project from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Experience/>
      <Education/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import About from './component/About';
import Header from './component/Header';
import Hero from './component/Hero';
import Project from './component/Project';
import Resume from './component/Resume';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;

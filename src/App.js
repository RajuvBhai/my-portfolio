import './App.css';
import About from './component/About';
import Header from './component/Header';
import Hero from './component/Hero';
import Project from './component/Project';
import Resume from './component/Resume';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Resume/>
    </div>
  );
}

export default App;

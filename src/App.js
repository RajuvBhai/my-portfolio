import './App.css';
import About from './component/About';
import Header from './component/Header';
import Hero from './component/Hero';
import Project from './component/Project';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Project/>
    </div>
  );
}

export default App;

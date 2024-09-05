import './App.css';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import ProjDetail from './Components/ProjDetail';

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <ProjDetail />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;

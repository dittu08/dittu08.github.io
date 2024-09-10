import './App.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import ProjDetail from './Components/ProjDetail';

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <ProjDetail />
      {/* <Skills />
      <Experience /> */}
    </div>
  );
}

export default App;

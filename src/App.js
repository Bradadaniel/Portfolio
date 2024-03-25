import './Style.css'
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';

import Navbar from "./components/Navbar";
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Experience/>
        <About/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;

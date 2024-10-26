import './App.css';
import Home from './Components/Home';
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home2 from './Components/Home2';
import CarouselComponent from './Components/CarouselComponent';
import Carousel2 from './Components/CarouselComponent2';
import Work2 from './Components/Work2';
import Home1 from './Components/Home1';

function App() {
  return (
    <div className="App">
      <Home1/>
      <About/>
      <Work/>
      <Carousel2/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

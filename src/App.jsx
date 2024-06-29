import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<MainLayout section="about" />} />
          <Route path="/experience" element={<MainLayout section="experience" />} />
          <Route path="/tech" element={<MainLayout section="tech" />} />
          <Route path="/works" element={<MainLayout section="works" />} />
          <Route path="/feedbacks" element={<MainLayout section="feedbacks" />} />
          <Route path="/contact" element={<MainLayout section="contact" />} />
        </Routes>
        <div className='relative z-0'>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

const MainLayout = ({ section }) => {
  return (
    <div>
      {section === "about" && <About />}
      {section === "experience" && <Experience />}
      {section === "tech" && <Tech />}
      {section === "works" && <Works />}
      {section === "feedbacks" && <Feedbacks />}
      {section === "contact" && <Contact />}
    </div>
  );
}

export default App;

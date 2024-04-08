import Loader from "../Animation/Loader";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import NavBar from "../Components/NavBar/NavBar";
import About from "../Layout/About/About";
import Project from "../Layout/Projects/Project";
const Home = () => {
  return (
    <>
      <Loader />
      <div className=" min-h-screen  w-full snap-y snap-mandatory overflow-auto">
        <div className="snap-start h-max">
          <NavBar />
        </div>
        <div className="snap-start min-h-screen w-full bg-dark home" id="home">
          <Hero />
        </div>
        <div
          className="snap-start min-h-screen w-full scroll-pt-3 about"
          id="about"
        >
          <About />
        </div>
        <div className="snap-start min-h-screen w-full project" id="project">
          <Project />
        </div>
        <div
          className="snap-start min-h-screen w-full bg-dark contact"
          id="contact"
        >
          <Contact />
        </div>
        <div className="snap-start min-h-max w-full bg-dark text-white">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;

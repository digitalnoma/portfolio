import Img from "../../assets/marcs-invest.png";
import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../Animation/FadeFromLeftAnimation";
import TechStack from "../../Components/TechStack/TechStack";

const About = () => {
  const heading = "About Me";

  return (
    <div className="bg-dark py-16 min-h-screen flex items-center justify-center">
      {/* Container for the entire section */}
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <h1 className="text-6xl lg:text-8xl text-white font-bold font-montserrat text-center mb-12">
          {heading?.split("").map((item, index) => (
            <motion.span key={index} {...fadeInFromLeft(index * 0.1)}>
              {item}
            </motion.span>
          ))}
        </h1>

        {/* Bento Canvas with Transparent Background */}
        <div className="border-1 border-white rounded-2xl p-10 lg:p-16 max-w-4xl mx-auto text-white text-justify">
          <motion.p
            {...fadeInFromLeft(0.3)}
            className="font-medium font-montserrat text-lg mb-8"
          >
            <strong>Who I Am:</strong>
            <br />
            Hi, I’m Marcus! I’m passionate about blending technology with
            design to craft intuitive and scalable digital solutions. With a
            focus on frontend development, product design, and AI, I constantly
            seek to build user-centric experiences.
          </motion.p>
          <motion.p
            {...fadeInFromLeft(0.5)}
            className="font-medium font-montserrat text-lg mb-8"
          >
            <strong>What Drives Me:</strong>
            <br />
            I thrive on continuous learning and collaboration, always eager to
            explore new ideas and solve complex problems. Curiosity and
            creativity fuel my work, pushing me to improve with every project.
          </motion.p>
          <motion.p
            {...fadeInFromLeft(0.7)}
            className="font-medium font-montserrat text-lg"
          >
            <strong>Where I’m Headed:</strong>
            <br />
            I aspire to grow as a product-driven software engineer, combining
            design thinking and advanced technology to develop impactful
            solutions for real-world challenges.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;

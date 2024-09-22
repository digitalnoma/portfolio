import Img from "../../assets/marcs-invest.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { fadeInFromLeft } from "../../Animation/FadeFromLeftAnimation";
import TechStack from "../../Components/TechStack/TechStack";

const About = () => {
  const heading = "About Me";

  return (
    <>
      <div className="bg-dark py-16  min-h-screen h-max ">
        <div className="mx-auto w-10/12 3xl:w-[1800px]">
          <h1 className="text-8xl flex justify-center text-white text-dark font-bold font-montserrat text-center mb-20 md:text-7xl sm:text-5xl  sm:mb-1">
          {heading?.split(/(?!)/).map((item, index) => {
              return (
                <motion.span key={index} {...fadeInFromLeft(index * 0.1)}>
                  {item}
                </motion.span>
              );
            })}
          </h1> 
          <div className=" grid grid-cols-12 justify-center gap-x-10 xl:gap-y-20 xl:gap-x-5">
            <div className="col-span-5 xl:col-span-7 lg:col-span-6 md:col-span-12 sm:text-center">
            <h3 className="uppercase font-semibold text-xl text-light mb-4 ">
                Introduction
              </h3>
              <motion.p {...fadeInFromLeft(0.3)} className="font-medium font-montserrat text-lg text-light text-justify">
                Hi, I'm Marcus, a web developer and UI/UX designer with a passion for creating design-centric digital experiences.
              </motion.p>
              <motion.p {...fadeInFromLeft(0.5)} className="font-medium my-5 font-montserrat text-lg text-light text-justify">
                I believe that design is about more than just making things look aesthetic - it's about solving problems, and creating intuitive and memorable experiences for users.
              </motion.p>
              <motion.p {...fadeInFromLeft(0.7)} className="font-medium font-montserrat text-lg text-light text-justify">
                I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </motion.p>
            </div>
            <div className="col-span-4 xl:col-span-5 md:col-span-12 md:flex md:justify-center flex items-center justify-center">
              <div className="border-2 p-2 border-white rounded-2xl shadow-[10px_10px_rgba(255,255,255,0.9)] h-[490px] w-[403px] md:w-full md:object-contain md:h-full 3xl:w-full 3xl:h-full">
                <img src={Img} alt="Marcus" className="rounded-2xl h-full w-full object-cover" loading="lazy" />
              </div>
            </div>            
          </div>
        </div>
      </div>
      <TechStack />
    </>
  );
};

export default About;

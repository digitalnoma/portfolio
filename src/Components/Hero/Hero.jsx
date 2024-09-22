import { BsBoxArrowUpRight } from "react-icons/bs";
// import miscImg from "../../assets/miscellaneous_icons_1..svg";
// import porfileImg from "../../assets/Profile.jpg";
import porfileImg from "../../assets/Profile.png";
import { motion } from "framer-motion";
import Resume from "../../assets/marcus-hacker-resume.pdf";
import { Typewriter } from "react-simple-typewriter";
import { fadeInFromLeft } from "../../Animation/FadeFromLeftAnimation";
const Hero = () => {
  const words = [
    "a Developer",
    "a UI / UX Designer",
    "an Educator",
  ];
  return (
    <div className="home  relative   overflow-hidden min-h-[85vh] sm:min-h-[90vh] ">
      <div className="w-10 h-10 bg-linear-orange-yellow rounded-full animate-pulse absolute top-0 left-2"></div>
      <div className="w-20 h-20 bg-linear-orange-yellow rounded-full animate-pulse absolute top-0 right-4 sm:hidden"></div>
      <div className="w-20 h-20 bg-linear-orange-yellow rounded-full animate-pulse absolute bottom-0 right-0 md:bottom-0 sm:w-14 sm:h-14"></div>
      <div className="w-10/12 mx-auto md:w-11/12  flex items-center pt-20 md:pb-10 sm:pt-2 sm:pb-0  lg:flex-col-reverse lg:gap-y-10 ">
        <div className="w-7/12   lg:w-full lg:flex lg:flex-col lg:items-center lg:text-center ">
          <h1 className="text-[53px] xl:text-5xl text-light font-bold font-montserrat leading-tight lg:text-6xl lg:my-10 sm:text-4xl md:text-center md:flex md:justify-center gap-y-3 md:gap-x-1    flex flex-wrap gap-x-3 h1 sm:gap-y-2 sm:mt-4">
            I am 
            <Typewriter
              key="uniqueKey"
              words={words}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </h1>
          <div className="w-1/2 lg:w-4/5   justify-center items-center md:w-full  h-full hidden lg:flex">
            <div className=" w-10/12 md:h-full flex items-center justify-center">
              <img
                src={porfileImg}
                alt=""
                className="h-full w-full"
                // className="3xl:w-9/12 3xl:h-4/5 h-1/2 object-contain w-10/12"
              />
            </div>
          </div>
          <motion.p
            {...fadeInFromLeft(0.1)}
            className="py-5 text-lg w-10/12 lg:w-full  text-light"
          >
            As a skilled developer, I am dedicated to turning ideas into
            innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in web development. <br/><br/>
            Best viewed on Desktop.<br/>
          </motion.p> 
          <div className="flex items-center  min-w-5/12 gap-x-7 flex-wrap gap-y-5 ">
            <motion.a
              {...fadeInFromLeft(0.2)}
              className="btn w-40 bg-linear-orange-yellow text-black border-0 font-semibold flex justify-center items-center gap-x-6   border-white cursor-pointer relative after:absolute after:left-0 after:top-0 after:w-0 after:duration-300 after:hover:w-full after:rounded-md z-20 after:bg-white after:bg-opacity-35 group  after:h-full"
              href={Resume}
              download
            >
              Resume
              <BsBoxArrowUpRight className="font-semibold group-hover:scale-110 duration-300" />
            </motion.a>

            <motion.a
              {...fadeInFromLeft(0.3)}
              href="mailto:marcusng0104@outlook.com"
              className="text-lg hover:after:bg-light text-light relative after:contents-[''] after:absolute after:w-0  after:h-[1.5px] after:-bottom-1 after:left-0  after:duration-300 hover:after:w-full   "
            >
              Contact
            </motion.a>
          </div>
          <motion.p
            {...fadeInFromLeft(0.1)}
            className="py-5 text-lg w-10/12 lg:w-full  text-light"
          >
            <br/>
          Scroll down to find out more ... 👇
          </motion.p>
        </div>
        <div className="w-5/12 lg:w-4/5  flex justify-center items-center md:w-full  h-full lg:hidden">
          <div className=" w-10/12 h-[66%] md:h-full flex items-center justify-center  ">
            <motion.img
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              src={porfileImg}
              alt=""
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

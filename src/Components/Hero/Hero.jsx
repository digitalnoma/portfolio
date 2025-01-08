import { BsBoxArrowUpRight } from "react-icons/bs";
import porfileImg from "../../assets/marcs-invest.png";
import { motion } from "framer-motion";
import Resume from "../../assets/marcusng-resume.pdf";
import { Typewriter } from "react-simple-typewriter";
import { fadeInFromLeft } from "../../Animation/FadeFromLeftAnimation";
const Hero = () => {
  const words = [
    "a Software Developer",
    "a UI / UX Designer",
    "a Product Engineer",
  ];
  return (
    <div className="home  relative   overflow-hidden min-h-[85vh] sm:min-h-[90vh] ">
      <div className="w-10/12 mx-auto md:w-11/12  flex items-center md:pb-10 sm:pt-2 sm:pb-0  lg:flex-col-reverse lg:gap-y-10 ">
        <div className="w-7/12   lg:w-full lg:flex lg:flex-col lg:items-center lg:text-center ">
          <h1 className="text-[53px] xl:text-5xl text-light font-bold font-montserrat leading-tight lg:text-6xl lg:my-10 sm:text-4xl md:text-center md:flex md:justify-center gap-y-3 md:gap-x-1    flex flex-wrap gap-x-3 h1 sm:gap-y-2 sm:mt-4">
            I am 
            <Typewriter
              key="uniqueKey"
              words={words}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={70}
              delaySpeed={2500}
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
            className="py-5 text-lg w-10/12 lg:w-full text-light"
          >
            Hi, I’m Marcus! A Front End Software Engineer passionate about blending design and technology. I build intuitive web applications and craft user focused designs to deliver responsive, scalable solutions.          </motion.p> 
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
          Keep scrolling to find out more about my story ... 👇
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

import { useState, useRef, useEffect } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  // FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import useClickOutsideDetector from "../../Hooks/useClickOutsideDetector";
import useThemeSwitcher from "../../Hooks/useThemeSwitcher";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef();
  const changeBtnStyle = () => {
    setShow(!show);
    // toggleNav();
  };
  //Click Outside Detector
  useClickOutsideDetector(menuRef, () => {
    setShow(false);
  });

  //Check For Small Devices Either that is is Mobie Navbar is Show or not

  let matchMedia = window.matchMedia("(max-width:768px)");

  const windowScreenChange = () => {
    if (matchMedia.matches) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", windowScreenChange);
    return () => window.removeEventListener("resize", windowScreenChange);
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollY > 230 ? setShow(false) : null;
      return () => window.removeEventListener("scroll", () => {});
    });
  }, []);

  const [mode, setMode] = useThemeSwitcher();

  return (
    <>
      <header className="bg-dark duration-300 h-24 py-10 flex items-center  relative z-30">
        <div className="min-h-[30px] flex items-center justify-between   w-10/12 mx-auto  md:w-11/12 md:mx-auto 3xl:w-[1800px] 3xl:mx-auto">
          <div className="w-4/12 flex items-center  ">
            <ScrollLink
              to="/"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
            >
              <h3 className="text-light tracking-wider hover:animate-pulse rounded-full flex justify-center items-center  font-bold cursor-pointer border-transparent border-2 text-2xl font-montserrat uppercase  ">
                Marcus
              </h3>
            </ScrollLink>
          </div>

          <div
            className={`md:fixed w-10/12 mx-auto flex items-center justify-end md:justify-center  md:z-20   md:w-11/12 md:flex-col md:bg-light  md:rounded-2xl md:left-1/2 md:top-24  md:-translate-x-1/2 duration-300 md:overflow-hidden  ${
              show ? "md:h-4/5 " : "md:h-0"
            }  `}
            ref={menuRef}
          >
            <div className="w-3/12  lg:w-5/12 md:h-2/5 md:mb-10">
              <ul className="flex h-[31px] justify-between md:flex-col md:items-center md:h-full text-white md:text-black ">
                <li>
                  <ScrollLink
                    to="home"
                    onClick={() => setShow(false)}
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer relative md:text-dark text-light hover:text-primaryyellow duration-300 group`}
                  >
                    Home
                    <span
                      className={`absolute w-0 group-hover:w-full duration-300 bg-primaryyellow md:bg-white inline-block bg-dark h-[1px] -bottom-1 left-0 `}
                    ></span>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="about"
                    onClick={() => setShow(false)}
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer relative md:text-dark text-light hover:text-primaryyellow duration-300 group`}
                  >
                    About
                    <span
                      className={`absolute w-0 group-hover:w-full duration-300 bg-primaryyellow md:bg-white inline-block bg-dark h-[1px] -bottom-1 left-0`}
                    ></span>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    onClick={() => setShow(false)}
                    to="project"
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer relative md:text-dark text-light hover:text-primaryyellow duration-300 group`}
                  >
                    Projects
                    <span
                      className={`absolute w-0 group-hover:w-full duration-300 bg-primaryyellow md:bg-white inline-block bg-dark h-[1px] -bottom-1 left-0  `}
                    ></span>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    onClick={() => setShow(false)}
                    to="contact"
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer relative md:text-dark text-light hover:text-primaryyellow duration-300 group`}
                  >
                    Contact
                    <span
                      className={`absolute w-0 group-hover:w-full duration-300 bg-primaryyellow md:bg-white inline-block bg-dark h-[1px] -bottom-1 left-0 `}
                    ></span>
                  </ScrollLink>
                </li>
              </ul>
            </div>
            {/* Can be use in future */}

            {/* <div className="w-3/12 lg:w-4/12 md:w-9/12 ">
              <ul className="flex justify-center items-center gap-x-6  ">
                
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="text-2xl hover:scale-105  relative text-[#1DA1F2]"
                  >
                    <FaTwitter className="hover:scale-125 duration-300" />
                  </a>
                </li>
                <li>
                  <a
                    className={`text-2xl hover:scale-105  relative text-[#0A66C2] ${
                      show
                        ? "dark:text-[#0A66C2] text-[hsla(0,0%,100%,0.85)]"
                        : "dark:text-[hsla(0,0%,100%,0.85)]"
                    }`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaLinkedin className={`hover:scale-125 duration-300 `} />
                  </a>
               
                </li>
                {/* <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl hover:scale-105  relative text-[#25D366]"
                  >
                    <FaWhatsapp className="hover:scale-125 duration-300" />
                  </a>
                </li> 
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl hover:scale-105  relative text-[#E4405F]"
                  >
                    <FaInstagram className="hover:scale-125 duration-300" />
                  </a>
                </li>
                {/* <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className={`text-2xl hover:scale-105  relative  `}
                  >
                    <FaGithub
                      className={`hover:scale-125 duration-300 fill-black   ${
                        show ? "fill-white dark:fill-black" : "dark:fill-white"
                      }`}
                    />
                  </a>
                </li> */}
            {/* <li>
                  <button
                    onClick={() =>
                      setMode((mode) => (mode === "light" ? "dark" : "light"))
                    }
                    className={`  text-xl rounded-full p-1 transition-colors duration-300 ${
                      mode === "dark"
                        ? "bg-light text-dark"
                        : "bg-dark text-light"
                    }`}
                  >
                    {mode === "dark" ? (
                      <BsFillMoonStarsFill className="duration-300 " />
                    ) : (
                      <BsFillSunFill className="duration-300 " />
                    )}
                  </button>
                </li> 
              </ul>
            </div> */}
          </div>
          <div className="w-max ml-3 hidden md:block">
            <button
              className="flex flex-col gap-y-[8px] w-max h-max text-light  p-1 outline-none text-3xl text-light "
              onClick={changeBtnStyle}
            >
              {show ? (
                <motion.span whileTap={{ scale: 1.3 }}>
                  <IoMdClose />
                </motion.span>
              ) : (
                <motion.span whileTap={{ scale: 1.3 }}>
                  <CgMenuLeftAlt />
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;

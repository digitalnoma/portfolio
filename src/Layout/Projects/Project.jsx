import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { fadeInFromLeft } from "../../Animation/FadeFromLeftAnimation";
import Tilt from "react-parallax-tilt";
import { Autoplay, Navigation, Pagination, Mousewheel } from "swiper/modules";
import { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import digitalFrost from '../../assets/digitalFrost.png';
import draftCentral from '../../assets/draftCentral.png';
import moodify from '../../assets/moodify.png';
import portfolio from '../../assets/portfolio.png';
import rentomatic from '../../assets/rentomatic.png';
import temasek from '../../assets/Temasek.png';
import prlgl from '../../assets/prlgl-logo.png';


const Project = () => {

  const heading = "Showcase";

  const projects = [
    {
      id: 1,
      image: rentomatic,
      date: "Jun 2023",
      title: "Rentomatic",
      description: "Led UI/UX design and Frontend Development for a tenant-landlord portal using React, Material UI, Cypress, and Jest, enhancing the rental process."
    },
    {
      id: 2,
      image: draftCentral,
      date: "Dec 2023",
      title: "CPF Board - draftCentral",
      description: "Developed a GenAI app with React, Material UI, integrating FastAPI and LLM API for semantic search and information retrieval."
    },
    {
      id: 3,
      image: temasek,
      date: "Feb 2024",
      title: "ClauseGenie",
      description: "Temasek x SUTD GenAI Hackathon Managed UI/UX design & dev, with backend GenAI integration."
    },
    {
      id: 4,
      image: digitalFrost,
      date: "Feb 2024",
      title: "Digital Frost",
      description: "I architected a website dedicated to Robert Frost, meticulously featuring his literary works and audio recordings, utilizing React and CSS to deliver a deeply immersive, interactive, and visually engaging user experience."
    },
    {
      id: 5,
      image: moodify,
      date: "Mar 2024",
      title: "Moodify",
      description: "Developed Moodify, a music recommender integrating LLMs and emotion analysis with Streamlit and PyTorch, for tailored playlists."
    },
    {
      id: 6,
      image: prlgl,
      date: "Apr 2024",
      title: "Prlgl - Startup",
      description: " Django | React | TailwindCSS"
    },
    {
      id: 7,
      image: portfolio,
      date: "Apr 2024",
      title: "Portfolio Website",
      description: "Leveraging advanced web technologies including Vite, ReactJS, TailwindCSS, and Framer Motion, my portfolio exhibits a meticulous, design-centric approach, emphasizing user experience and aesthetic elegance."
    }
  ];
  
  const [progress, setProgress] = useState(1);

  const updateProgress = (swiper) => {
    // Directly use swiper.realIndex, which is the index of the active slide, starting from 0
    // Add 1 to start counting from 1 instead of 0
    setProgress(swiper.realIndex + 1);
  };
  
  
  return (
    <div className="bg-dark py-10  min-h-screen">
      <div className="mx-auto w-10/12 3xl:w-[1800px] pt-3 sm:pt-2">
        <h1 className="text-8xl flex justify-center text-white text-dark font-bold font-montserrat text-center mb-20 md:text-7xl sm:text-5xl  sm:mb-12">
          {heading?.split("")?.map((item, index) => {
            return (
              <motion.span key={index} {...fadeInFromLeft(index * 0.1)}>
                {item}
              </motion.span>
            );
          })}
        </h1>

        <div className="flex justify-center mx-auto w-full">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            centeredSlides={true}
            speed={800}
            grabCursor={true}
            pagination={{
              clickable: false,
              el: ".swiper-pagination-new",
            }}
            mousewheel={false}
            autoplay={true}
            allowSlideNext={true}
            allowSlidePrev={true}
            loop={true}
            onSlideChange={updateProgress}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              550: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation, Autoplay, Mousewheel, Pagination]}
            className="mySwiper w-full h-full mx-auto flex justify-center items-center"
          >
            {projects.map((item) => {
              return (
                <SwiperSlide
                  key={item.id}
                  className=" text-center flex justify-center items-center w-[300px] sm:w-full mx-auto"
                >
                  <div key={item} {...fadeInFromLeft(item * 0.1)} className=" ">
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                      <div className="w-[300px] sm:w-full bg-white hover:bg-light duration-300 h-[400px] cursor-pointer rounded-xl bg-light card group overflow-hidden relative">
                        <img
                          src={item.image}
                          className="w-full h-max group-hover:opacity-75 duration-700"
                          alt=""
                        />
                        <div className="px-5 py-3 flex-grow fledx flex-col justify-center">
                          <h5>{item.date}</h5>
                          <h3 className="text-xl font-medium ">{item.title}</h3>
                          <p className="">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Tilt>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="swiper-pagination-new relative mt-7 w-8/12 mx-auto flex justify-center gap-x-[2px]"></div>
        <div className="text-white relative mt-5 flex justify-center text-xl gap-x-1 items-center">
          <button className="mr-2 swiper-button-prev outline-none">
            <IoArrowBack />
          </button>
          <span>{progress.toFixed(0)}</span>/<span>{projects.length}</span>
          <button className="ml-2 swiper-button-next outline-none">
            <IoArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;

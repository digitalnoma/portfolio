import { motion } from "framer-motion";
import { IoMdSend } from "react-icons/io";
import { fadeInFromLeft } from "../../Animation/FadeFromLeftAnimation";
const Contact = () => {
  const heading = "Connect";
  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-dark py-3  min-h-screen sm:py-5 contact">
      <div className="mx-auto w-10/12 3xl:w-[1800px]  sm:pt-0">
        <h1 className="flex justify-center text-8xl text-white text-dark font-bold font-montserrat text-center mb-20 md:text-7xl sm:text-5xl sm:mb-8">
          {heading?.split("")?.map((item, index) => {
            return (
              <motion.span key={index} {...fadeInFromLeft(index * 0.1)}>
                {item}
              </motion.span>
            );
          })}
        </h1>
        <form action="" onSubmit={Submit}>
          <div className="flex gap-y-5 items-center flex-col">
            <motion.div
              {...fadeInFromLeft(0.2)}
              className="flex flex-col gap-y-3 w-6/12 sm:w-11/12 md:w-10/12"
            >
              <label htmlFor="" className="text-white text-lg">
                Name
              </label>
              <input
                required
                type="text"
                className="border text-white border-white outline-none  rounded-md py-3  bg-[#202020] pl-3"
                placeholder="Enter Name"
              />
            </motion.div>
            <motion.div
              {...fadeInFromLeft(0.4)}
              className="flex flex-col gap-y-3 w-6/12 sm:w-11/12 md:w-10/12"
            >
              <label htmlFor="" className="text-white text-lg">
                Email
              </label>
              <input
                required
                type="email"
                className="border text-white border-white outline-none  rounded-md py-3  bg-[#202020] pl-3"
                placeholder="Enter Name"
              />
            </motion.div>
            <motion.div
              {...fadeInFromLeft(0.6)}
              className="flex flex-col gap-y-3 w-6/12 sm:w-11/12 md:w-10/12"
            >
              <label htmlFor="" className="text-white text-lg">
                Message
              </label>
              <textarea
                required
                name=""
                id=""
                cols="30"
                rows="6"
                className="border text-white resize-none border-white outline-none  rounded-md py-3  bg-[#202020] pl-3"
                placeholder="Enter Message"
              ></textarea>
            </motion.div>
            <motion.button
              {...fadeInFromLeft(0.7)}
              className="btn w-40 mt-4 bg-primaryyellow text-black border-0 font-semibold flex justify-center items-center gap-x-6   border-white cursor-pointer relative after:absolute after:left-0 after:top-0 after:w-0 after:duration-300 after:hover:w-full after:rounded-md z-20 after:bg-white after:bg-opacity-35 group  after:h-full"
              type="submit"
            >
              Send
              <IoMdSend className="font-semibold group-hover:scale-110 duration-300" />
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

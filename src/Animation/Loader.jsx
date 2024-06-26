import { motion } from "framer-motion";

const Loader = () => {
  return (
    <>
      <div className="z-50 relative">
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen bg-primaryorange z-30"
          initial={{ x: "100%", width: "100%" }}
          animate={{ x: "0%", width: "0%" }}
          exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen bg-primaryblue z-20"
          initial={{ x: "100%", width: "100%" }}
          animate={{ x: "0%", width: "0%" }}
          transition={{ delay: 0.7, duration: 0.9, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen bg-dark z-20"
          initial={{ x: "100%", width: "100%" }}
          animate={{ x: "0%", width: "0%" }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </>
  );
};

export default Loader;

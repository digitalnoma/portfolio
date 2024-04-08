import { FaHeart } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="py-3">
      <div className="text-light flex justify-center gap-x-3 text-3xl pt-5">
        <a
          href="https://www.linkedin.com/in/marcus-ng-0104e/"
          rel="noopener"
          target="_blank"
          className="duration-300 hover:scale-125"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/digitalnoma"
          rel="noopener"
          target="_blank"
          className="duration-300 hover:scale-125"
        >
          <FaGithub />
        </a>
      </div>
      <p className="flex items-center justify-center sm:text-center flex-wrap px-4 mt-3">
        &copy; {new Date().getFullYear()} All rights are reserved. Made with
        <span className="mx-1 animate-pulse text-red-500 text-xl">
          <FaHeart />
        </span>
        by Marcus
      </p>
    </div>
  );
};

export default Footer;

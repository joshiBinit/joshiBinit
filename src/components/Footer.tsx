import React from "react";
import { Mail } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-2 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-extrabold tracking-tight mb-1">
              Binit Joshi
            </h3>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer — creating clean, performant web experiences.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/joshiBinit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group p-2 rounded-full transition-all duration-300"
            >
              <SiGithub className="w-6 h-6 text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-300" />{" "}
            </a>
            <a
              href="www.linkedin.com/in/binit-joshi-2b9773242"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group p-2 rounded-full transition-all duration-300"
            >
              <SiLinkedin className="w-6 h-6 text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-300" />{" "}
            </a>
            <a
              href="mailto:binitjoshi4554@gmail.com"
              aria-label="Email"
              className="group p-2 rounded-full transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5"></div>
      </div>
    </footer>
  );
};

export default Footer;

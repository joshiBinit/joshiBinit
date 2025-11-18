import React from "react";
import { ArrowDown, Mail } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black"></div>

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${14 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 animate-fade-in-up">
          <span className="block text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2">
            Hello, I&apos;m
          </span>
          <span className="relative inline-block text-white">
            Binit Joshi
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
          </span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up delay-200">
          Full-Stack Developer with a passion for crafting elegant, performant
          and engaging digital experiences.
        </p>

        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => scrollToSection("#projects")}
            className="group relative px-8 py-3.5 border border-white/20 bg-white text-black font-semibold text-sm uppercase tracking-wider transition-all duration-500 hover:bg-white hover:text-white hover:tracking-widest min-w-[200px] rounded-md overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              View My Work
            </span>
          </button>

          <button
            onClick={() => scrollToSection("#contact")}
            className="group relative px-8 py-3.5 border border-white/20 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-500 hover:bg-white hover:text-black hover:tracking-widest min-w-[200px] rounded-md overflow-hidden"
          >
            <span className="relative z-10">Get In Touch</span>
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Get In Touch
            </span>
          </button>
        </div>

        <div className="animate-fade-in-up delay-600 flex justify-center space-x-8 mb-16">
          <a
            href="https://github.com/joshiBinit"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 transition-all duration-300"
            aria-label="GitHub"
          >
            <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <SiGithub className="w-6 h-6 text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-300" />{" "}
          </a>
          <a
            href="www.linkedin.com/in/binit-joshi-2b9773242"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <SiLinkedin className="w-6 h-6 text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-300" />{" "}
          </a>
          <a
            href="mailto:binitjoshi4554@gmail.com"
            className="group relative p-3 transition-all duration-300"
            aria-label="Email"
          >
            <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Mail className="w-6 h-6 text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("#about")}
          aria-label="Scroll to About section"
          className="group animate-bounce-slow mx-auto"
        >
          <div className="relative p-3">
            <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <ArrowDown className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors duration-300" />
          </div>
        </button>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-white/20 to-transparent"></div>
      </div>

      <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-white/10"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-white/10"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-white/10"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-white/10"></div>
    </section>
  );
};

export default Hero;

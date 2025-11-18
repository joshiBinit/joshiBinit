import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="relative">
              <button
                onClick={() => scrollToSection("#home")}
                className="group flex items-center space-x-2"
              >
                <div className="relative">
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tighter">
                    BinitJoshi
                  </div>
                  <div className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </button>
            </div>

            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <React.Fragment key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="group relative px-4 py-2 transition-all duration-300"
                    >
                      <span
                        className={`relative z-10 text-sm font-light tracking-wider uppercase transition-colors duration-300 ${
                          activeSection === item.id
                            ? "text-white"
                            : "text-gray-500 group-hover:text-white"
                        }`}
                      >
                        {item.name}
                      </span>
                      {activeSection === item.id && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                      )}
                      <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                    </button>
                    {index < navItems.length - 1 && (
                      <span className="text-gray-700 select-none">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="ml-8">
                <button
                  onClick={() => navigate("/experience")}
                  className="group relative px-6 py-2 overflow-hidden border border-white/20 hover:border-white transition-all duration-300"
                >
                  <span className="relative z-10 text-xs font-light tracking-widest uppercase text-gray-400 group-hover:text-black transition-colors duration-300">
                    Hire Me
                  </span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <div className="space-y-1.5">
                    <span className="block w-5 h-px bg-white transition-all duration-300"></span>
                    <span className="block w-5 h-px bg-white transition-all duration-300"></span>
                    <span className="block w-3 h-px bg-white transition-all duration-300 group-hover:w-5"></span>
                  </div>
                )}
              </div>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/95 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-80 bg-black border-l border-white/10 transform transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-3 group"
            aria-label="Close menu"
          >
            <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <X className="relative z-10 w-6 h-6 text-white" />
          </button>

          <div className="flex flex-col items-center justify-center h-full px-8">
            <div className="space-y-8 text-center">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="group relative block"
                  >
                    <span className="block text-gray-700 text-xs font-mono mb-2">
                      0{index + 1}
                    </span>
                    <span
                      className={`relative text-2xl font-light tracking-wider uppercase transition-all duration-300 ${
                        activeSection === item.id
                          ? "text-white"
                          : "text-gray-500 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                      {activeSection === item.id && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-px bg-white"></div>
                      )}
                    </span>
                  </button>
                </div>
              ))}

              <div className="pt-8">
                <button
                  onClick={() => {
                    scrollToSection("#contact");
                  }}
                  className="group relative px-8 py-3 overflow-hidden border border-white/20 hover:border-white transition-all duration-300"
                >
                  <span className="relative z-10 text-sm font-light tracking-widest uppercase text-gray-400 group-hover:text-black transition-colors duration-300">
                    Get In Touch
                  </span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                </button>
              </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0">
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-white transition-colors duration-300"
                >
                  <span className="text-xs font-mono">GH</span>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-white transition-colors duration-300"
                >
                  <span className="text-xs font-mono">LI</span>
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-white transition-colors duration-300"
                >
                  <span className="text-xs font-mono">EM</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

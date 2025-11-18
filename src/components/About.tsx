import React from "react";
import { Brain, Bug, Code } from "lucide-react";

const About: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Reusable & Clean Code",
      description:
        "Building structured, maintainable components that keep projects consistent and scalable.",
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Debugging Expertise",
      description:
        "Tracking down issues quickly and implementing precise, stable fixes through analytical debugging.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Problem‑Solving Mindset",
      description:
        "Transforming complex problems into elegant solutions through logical thinking and creativity.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #ffffff,
              #ffffff 1px,
              transparent 1px,
              transparent 15px
            )`,
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            <span className="inline-block hover:scale-105 transition-transform duration-300">
              About
            </span>{" "}
            <span className="inline-block hover:scale-105 transition-transform duration-300">
              Me
            </span>
          </h2>
          <div className="w-20 h-[2px] bg-white mx-auto mb-8 transition-all duration-300 group-hover:w-28"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            I'm a Computer Engineer passionate about crafting sleek, performant
            user experiences. With over a year of hands-on frontend experience,
            I specialize in React, Angular, and Next.js, and I also explore
            full-stack development across the MERN and MEAN ecosystems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-300 border-l-2 border-white pl-6 hover:pl-8 transition-all duration-300 text-base md:text-lg leading-relaxed">
              My journey began with curiosity and evolved into building
              high-quality products. I focus on writing clean, reusable code
              using technologies like HTML, CSS, JavaScript, TypeScript, and
              Tailwind CSS — always aiming to make my work intuitive for both
              users and fellow developers.
            </p>

            <p className="text-gray-300 border-l-2 border-gray-700 hover:border-white pl-6 hover:pl-8 transition-all duration-300 text-base md:text-lg leading-relaxed">
              Outside of coding, I enjoy gaming and exploring the relationship
              between logic and creativity — both in digital worlds and
              real‑life problem solving.
            </p>

            <div className="pt-8">
              <button className="group relative px-8 py-4 font-semibold text-sm uppercase border-2 border-white tracking-widest overflow-hidden transition-all duration-300 hover:bg-white hover:text-black">
                Download Resume
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-black border border-neutral-800 p-6 rounded-xl transition-all duration-500 hover:border-white hover:shadow-white/10"
              >
                <div className="relative flex items-start space-x-5">
                  <div className="p-3 border border-white bg-black text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-white opacity-0 group-hover:w-8 group-hover:h-8 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-white opacity-0 group-hover:w-8 group-hover:h-8 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

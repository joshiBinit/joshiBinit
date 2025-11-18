import React from "react";
import { FaReact, FaServer, FaTools } from "react-icons/fa";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="h-8 w-8 text-white" />,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Angular",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5 & CSS3",
      ],
    },
    {
      title: "Backend",
      icon: <FaServer className="h-8 w-8 text-white" />,
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "Django",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
      ],
    },
    {
      title: "Tools",
      icon: <FaTools className="h-8 w-8 text-white" />,
      skills: ["Git & GitHub", "Docker", "Vercel", "Figma", "Jira", "Webpack"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 min-h-screen bg-black text-white transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            My Tech Stack
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technologies I master to craft seamless, scalable, and striking web
            experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-2xl shadow-lg p-8 hover:shadow-white/10 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

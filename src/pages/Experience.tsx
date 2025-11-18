import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBriefcase,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaHandshake,
} from "react-icons/fa";

import octanet1 from "../assets/octanet.png";
import ims1 from "../assets/ims.png";

const Experience: React.FC = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  const experiences = [
    {
      role: "Web Development Intern",
      company: "Octanet Services Pvt Ltd.",
      duration: "2 Months",
      description:
        "Built responsive, dynamic web applications using React and Tailwind CSS. Focused on reusable components, API integration, and deployment to enhance frontend fundamentals.",
      achievements: [octanet1],
    },
    {
      role: "Angular Intern",
      company: "IMS Software, Kathmandu, Nepal",
      duration: "3 Months",
      description:
        "Developed interactive dashboards and modules in Angular with TypeScript and RxJS. Delivered new features and improved performance in agile sprints.",
      achievements: [ims1],
    },
    {
      role: "Angular Developer",
      company: "Technofex Nepal",
      duration: "Present",
      description:
        "Working full-time as an Angular Developer creating scalable enterprise applications with strong focus on performance, UX, and clean architecture.",
      achievements: [],
    },
  ];

  const openAchievements = (imgs: string[]) => {
    setImages(imgs);
    setCurrentIdx(0);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);
  const prevImage = () =>
    setCurrentIdx((p) => (p === 0 ? images.length - 1 : p - 1));
  const nextImage = () =>
    setCurrentIdx((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden">
      <button
        onClick={() => navigate(-1)}
        className="group absolute top-6 right-6 border border-white/20 bg-white text-black font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded-md overflow-hidden transition-all duration-500 hover:bg-white hover:text-white hover:tracking-widest min-w-[180px] z-20"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <FaArrowLeft className="text-sm" /> Back
        </span>
        <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
        <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 gap-2">
          <FaArrowLeft className="text-sm" /> Back
        </span>
      </button>

      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          A vertical timeline of milestones—from internships to current
          full-time roles.
        </p>
      </div>

      <div className="relative border-l-2 border-neutral-800 pl-10 space-y-12 max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="relative bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-2xl shadow-lg p-6 hover:shadow-white/10 transition-all duration-300"
          >
            <span className="absolute -left-[14px] w-6 h-6 rounded-full bg-indigo-600 border-4 border-black ring-2 ring-indigo-500/40 flex items-center justify-center">
              <FaBriefcase className="h-3.5 w-3.5 text-white" />
            </span>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-400 mt-1 sm:mt-0">
                {exp.duration}
              </p>
            </div>

            <h4 className="text-indigo-400 font-medium text-sm mb-2 uppercase tracking-wider">
              {exp.company}
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {exp.description}
            </p>

            {!!exp.achievements.length && (
              <button
                onClick={() => openAchievements(exp.achievements)}
                className="relative group px-6 py-2 border border-white/20 bg-white text-black font-semibold text-xs uppercase tracking-wider rounded-md overflow-hidden transition-all duration-500 hover:bg-white hover:text-white hover:tracking-widest"
              >
                <span className="relative z-10">Achievements</span>
                <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs">
                  Achievements
                </span>
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-24 text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-200">
          Want to collaborate or offer me a role?
        </h3>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          I'm always excited about new opportunities to build meaningful,
          creative, and high-impact applications. Let's make something amazing
          together!
        </p>

        <button
          onClick={() => navigate("/hire")}
          className="group relative mx-auto flex items-center justify-center gap-3 px-10 py-4 border border-indigo-600 bg-indigo-600 text-white text-sm font-semibold uppercase tracking-wider rounded-md overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_#6366F1]"
        >
          <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-indigo-600">
            <FaHandshake className="text-lg" />
            Let's Work Together
          </span>

          <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

          <span className="absolute inset-0 flex items-center justify-center gap-2 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <FaHandshake className="text-lg" />
            Let's Work Together
          </span>
        </button>
      </div>

      {showModal && images.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute top-3 right-3 text-gray-300 hover:text-white transition z-10"
            >
              <FaTimes className="h-5 w-5" />
            </button>

            <div className="flex items-center justify-center relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-3 text-gray-300 hover:text-white p-2 rounded-full bg-black/30"
              >
                <FaChevronLeft className="h-5 w-5" />
              </button>

              <img
                src={images[currentIdx]}
                alt={`Achievement ${currentIdx + 1}`}
                className="max-h-[80vh] w-auto mx-auto object-contain select-none transition-transform duration-500 ease-in-out"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 text-gray-300 hover:text-white p-2 rounded-full bg-black/30"
              >
                <FaChevronRight className="h-5 w-5" />
              </button>
            </div>

            {images.length > 1 && (
              <div className="flex justify-center gap-2 my-4">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIdx(idx);
                    }}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                      idx === currentIdx
                        ? "bg-indigo-500"
                        : "bg-gray-500/50 hover:bg-gray-400/70"
                    }`}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;

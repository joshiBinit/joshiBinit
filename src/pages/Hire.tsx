import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";

import sayMyName from "../assets/sayMyName.mp4";
import youreRight from "../assets/youreRight.mp4";
import wrongAnswer from "../assets/wrong.mp4";

const Hire: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const [showAuth, setShowAuth] = useState(false);
  const [authStep, setAuthStep] = useState<"intro" | "success" | "wrong">(
    "intro"
  );
  const [inputName, setInputName] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAuth(true);
  };

  const verifyName = () => {
    if (inputName.trim().toLowerCase() === "binit joshi") {
      setAuthStep("success");
      setTimeout(() => actuallySend(), 4000);
    } else {
      setInputName("");
      setAuthStep("wrong");
    }
  };

  const actuallySend = async () => {
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/xyzlqpzv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setShowAuth(false);
    setAuthStep("intro");
    setInputName("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden">
      <button
        onClick={() => navigate(-1)}
        className="group absolute top-6 right-6 border border-white/20 bg-white text-black font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded-md overflow-hidden transition-all duration-500 hover:bg-white hover:text-white hover:tracking-widest min-w-[180px]"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <FaArrowLeft className="text-sm" /> Back
        </span>
        <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
        <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 gap-2">
          <FaArrowLeft className="text-sm" /> Back
        </span>
      </button>

      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          I'm open to new opportunities and collaborations. Fill out the form —
          but first, prove you know the name.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Reach out</h3>
            <p className="text-gray-400 leading-relaxed">
              Send me a message about your idea, project, job offer, or just to
              chat tech. I'll respond as soon as I can.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-gray-400 break-all">
                  binitjoshi4554@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-gray-400">+977 9818168488</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Location</h4>
                <p className="text-gray-400">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-md bg-black border border-neutral-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2 text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-md bg-black border border-neutral-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2 text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Pitch me your idea..."
                className="w-full px-4 py-3 rounded-md bg-black border border-neutral-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 border border-indigo-600 bg-indigo-600 text-white font-semibold uppercase tracking-wider rounded-md hover:bg-transparent hover:text-indigo-400 hover:border-indigo-400 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              <span>Send Message</span>
            </button>

            {status === "sent" && (
              <p className="text-center text-green-400 text-sm mt-2">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-400 text-sm mt-2">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>

      {showAuth && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowAuth(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl p-6 max-w-lg w-full text-center space-y-6"
          >
            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            >
              <FaTimes className="h-5 w-5" />
            </button>

            {authStep === "intro" && (
              <>
                <video
                  src={sayMyName}
                  className="w-full rounded-md"
                  autoPlay
                  playsInline
                  controls={false}
                />
                <p className="text-gray-300 text-sm mt-3">
                  Heisenberg: “Say my name 👀”
                </p>

                <input
                  type="text"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  placeholder="Type his name..."
                  className="w-full px-4 py-2 mt-4 rounded-md bg-black border border-gray-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                />
                <button
                  onClick={verifyName}
                  className="w-full py-2 px-6 bg-indigo-600 rounded-md font-semibold uppercase tracking-wider hover:bg-indigo-700 transition"
                >
                  Verify
                </button>
              </>
            )}

            {authStep === "wrong" && (
              <video
                src={wrongAnswer}
                className="w-full rounded-md"
                autoPlay
                playsInline
                onEnded={() => setAuthStep("intro")}
              />
            )}

            {authStep === "success" && (
              <video
                src={youreRight}
                className="w-full rounded-md"
                autoPlay
                playsInline
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hire;

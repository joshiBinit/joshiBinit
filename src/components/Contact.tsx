import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  /** ✉️ Custom handler that posts to Formspree via fetch */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

    // remove notification after a few seconds
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I’d love to hear from
            you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ---------- Left Info Column ---------- */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let’s work together</h3>
              <p className="text-gray-400 leading-relaxed">
                I’m always open to collaborating on interesting projects or new
                opportunities. Whether you want to start a conversation or ask a
                quick question, drop me a message below—let’s make ideas happen.
              </p>
            </div>

            <div className="space-y-6">
              {/* contact info items */}
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
                  <p className="text-gray-400">+977 9818168488</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-gray-400">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Form Column ---------- */}
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
                  className="w-full px-4 py-3 rounded-md bg-black border border-neutral-700 text-white focus:border-white focus:ring-1 focus:ring-white transition-all duration-300"
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
                  className="w-full px-4 py-3 rounded-md bg-black border border-neutral-700 text-white focus:border-white focus:ring-1 focus:ring-white transition-all duration-300"
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
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-md bg-black border border-neutral-700 text-white focus:border-white focus:ring-1 focus:ring-white transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 px-6 bg-white text-black font-semibold uppercase tracking-wider rounded-md hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                <Send size={18} />
                <span>
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                    ? "Sent!"
                    : "Send Message"}
                </span>
              </button>

              {/* feedback below the button */}
              {status === "sent" && (
                <p className="text-center text-green-400 text-sm">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-red-400 text-sm">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

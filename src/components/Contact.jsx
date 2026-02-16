// src/components/Contact.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-background relative border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-primary"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let’s Build Something Incredible
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Got a project in mind or just want to say hi? I’m all ears.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center items-center gap-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/keinar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300 text-4xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/keinar-elkayam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300 text-4xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:keinar.elkayam@gmail.com"
            className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300 text-4xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="mt-8 bg-surface/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/5 grid gap-6"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/xkgzjoyw"
          method="POST"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
          <textarea
            name="message"
            required
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
          />
          <button
            type="submit"
            className="w-full md:w-auto mx-auto px-8 py-3 bg-primary hover:bg-primary/90 text-background font-bold rounded-full transition-all flex items-center justify-center shadow-lg shadow-primary/20"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

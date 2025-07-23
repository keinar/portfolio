// src/components/Contact.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-dark/90">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* כותרת */}
        <motion.h2
          className="text-4xl font-bold text-primary"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let’s Build Something Incredible
        </motion.h2>

        {/* תת־כותרת */}
        <motion.p
          className="text-lg text-white/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Got a project in mind or just want to say hi? I’m all ears.
        </motion.p>

        {/* לוגואים */}
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
            className="text-white hover:text-primary text-4xl transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/keinar-elkayam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary text-4xl transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:keinar.elkayam@gmail.com"
            className="text-white hover:text-primary text-4xl transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* טופס יצירת קשר */}
        <motion.form
          className="mt-8 bg-card/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg grid gap-6"
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
              className="w-full px-4 py-3 rounded-md bg-dark border border-white/20 text-white focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-dark border border-white/20 text-white focus:outline-none focus:border-primary"
            />
          </div>
          <textarea
            name="message"
            required
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-md bg-dark border border-white/20 text-white focus:outline-none focus:border-primary resize-none"
          />
          <button
            type="submit"
            className="w-full md:w-auto mx-auto px-6 py-3 bg-primary text-bg font-semibold rounded-full hover:scale-105 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

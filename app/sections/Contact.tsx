import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Mail className="w-6 h-6" />
            <a href="mailto:annjan0077@gmail.com" className="hover:text-blue-600">annjan0077@gmail.com</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-2"
          >
            <Phone className="w-6 h-6" />
            <a href="tel:+918295380969" className="hover:text-blue-600">+91 8295380969</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <MapPin className="w-6 h-6" />
            <span>Sirsa, Haryana, 125055</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center space-x-2"
          >
            <Linkedin className="w-6 h-6" />
            <a href="https://www.linkedin.com/in/annjan-arora" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Annjan Arora</a>
          </motion.div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-2 border rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  )
}
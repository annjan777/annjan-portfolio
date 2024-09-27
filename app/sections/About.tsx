import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-6 dark:text-gray-200">About Me</h2>
      <p className="text-lg dark:text-gray-300">
        Detail-oriented Software Developer skilled in designing robust, efficient code and
        experienced in full-stack web development and IoT projects. Adept at collaborating with
        teams to design algorithms, verify functionality, and apply development processes. Seeking to
        leverage analytical and problem-solving abilities, communication skills, and a high sense of
        ownership to contribute to innovative projects and a collaborative tech culture.
      </p>
    </motion.section>
  )
}
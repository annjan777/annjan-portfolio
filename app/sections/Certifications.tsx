import { motion } from 'framer-motion'

export default function Certifications() {
  const certifications = [
    "NPTEL certificate in 'Introduction to Internet of Things', achieving a distinguished score of 90%.",
    "Certified by Coursera with IBM Full Stack Software Developer Professional Certificate",
    "Crash Course on Python"
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-6">Certifications & Achievements</h2>
      <ul className="space-y-4">
        {certifications.map((cert, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: index * 0.1 }
            }}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            {cert}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}
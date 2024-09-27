import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    "C++", "Java", "Python", "Django", "DBMS", "NodeJS", "HTML", "CSS", "MongoDB", "SQL",
    "DSA", "Embedded Technologies", "JavaScript", "AWS", "Cloud Computing", "IoT"
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-white p-4 rounded-lg shadow-md text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
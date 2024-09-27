import { motion } from 'framer-motion'

export default function Education() {
  const educationData = [
    {
      degree: "Bachelors in Engineering",
      institution: "Chandigarh University, Mohali",
      duration: "2021-Present",
      score: "8.09 CGPA (till 6th Semester)"
    },
    {
      degree: "Intermediate (CBSE)",
      institution: "Gyan Jyoti Public School, Sirsa",
      duration: "2018-2020",
      score: "92%"
    },
    {
      degree: "Matriculation (CBSE)",
      institution: "Shah Satnam Ji Boys School, Sirsa",
      duration: "2017-2018",
      score: "87.4%"
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-500">{edu.duration}</p>
            <p className="text-gray-500">{edu.score}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
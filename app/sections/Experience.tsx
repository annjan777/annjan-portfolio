import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: "NPTEL Intern",
      company: "IIT Kharagpur",
      duration: "May 2023 - Present",
      responsibilities: [
        "Led the integration of IoT device (Raspberry Pi, Node MCU) with cloud services for embedded technology projects, improving system efficiency by 40%.",
        "Developed and deployed scalable applications using Django and AWS, reducing server costs by 30%.",
        "Implemented MQTT protocol for efficient message queuing and communication, increasing data transmission speed by 25%."
      ]
    },
    {
      title: "Web Development Intern",
      company: "PG-Tech Solutions Private Limited",
      duration: "June 2023 - July 2023",
      responsibilities: [
        "Created and maintained web applications using the MERN stack, improving user engagement by 20%.",
        "Collaborated with cross-functional teams to design and implement new features, leading to a 15% increase in user satisfaction."
      ]
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-500 mb-4">{exp.duration}</p>
            <ul className="list-disc list-inside space-y-2">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
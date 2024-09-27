import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: "Smart Gas Leakage Detection",
      date: "August 2023",
      description: [
        "Led a project with a team of 5, analyzing the marketing implications of integrating an Arduino Uno and MQ-135 gas sensor in industrial facilities.",
        "Developed a scalable application using Django for better UI and Maintenance."
      ]
    },
    {
      title: "Depression Detection System",
      date: "February 2023",
      description: [
        "Built a Depression Detection System using Python and Flask, evaluating mental well-being through a web application.",
        "Designed a user feedback mechanism within the system, resulting in a 20% improvement in detection accuracy based on continuous user input."
      ]
    },
    {
      title: "Integrated Visionary Command System (IVCS)",
      description: [
        "Created the IVCS in Python, using facial landmarks for precise cursor control with an accuracy rate of 95%.",
        "Incorporated voice commands for navigation, reducing interaction time compared to traditional methods.",
        "Forged a safety feature that deactivates voice commands when eyes are closed, enhancing usability and security."
      ]
    },
    {
      title: "Portfolio Website",
      description: [
        "Created a personal portfolio website using HTML, CSS, and JavaScript.",
        "URL: https://annjan.rf.gd"
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
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            {project.date && <p className="text-gray-500 mb-4">{project.date}</p>}
            <ul className="list-disc list-inside space-y-2">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
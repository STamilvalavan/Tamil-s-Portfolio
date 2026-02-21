import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Vue.js']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'CI/CD']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technologies and tools I work with to bring ideas to life
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className="space-y-4"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-2xl text-purple-600 mb-6">{category.category}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-purple-50 transition-colors cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-purple-600 rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.1 }}
                      ></motion.div>
                      <span className="text-lg text-gray-700">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
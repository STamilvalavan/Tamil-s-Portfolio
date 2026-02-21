import { Code2, Palette, Rocket } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code with best practices and modern technologies",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description:
        "Crafting intuitive user experiences with attention to detail and aesthetics",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description:
        "Delivering high-quality projects on time with efficient workflows",
    },
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
            About Me
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Passionate about creating digital solutions that
            make a difference
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjBjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzY5MjUyMDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Web Development"
                className="rounded-lg shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-gray-700 mb-6">
                Fresh B.Tech graduate in Information Technology with a passion for building modern web 
                applications. I've developed strong expertise in React.js, JavaScript, TypeScript, and 
                Python, combined with hands-on experience as a React Developer intern at VDart, where I 
                contributed to real-world projects and enhanced my practical skills.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My technical toolkit includes React.js, Django, Tailwind CSS, HTML5, CSS3, SQL, and modern 
                web development practices. I'm eager to apply my knowledge and continue learning while 
                building impactful digital solutions that make a difference.
              </p>
              <p className="text-lg text-gray-700">
                I believe in clean code, continuous learning, and staying updated with the latest 
                technologies. Always excited to take on new challenges and collaborate on innovative 
                projects that push the boundaries of web development.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              // Different animation variants for each card
              const variants = [
                {
                  initial: { opacity: 0, x: -100, rotate: -10 },
                  whileInView: { opacity: 1, x: 0, rotate: 0 },
                  whileHover: {
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 },
                  },
                },
                {
                  initial: { opacity: 0, scale: 0.5 },
                  whileInView: { opacity: 1, scale: 1 },
                  whileHover: {
                    scale: 1.1,
                    y: -10,
                    transition: { duration: 0.3 },
                  },
                },
                {
                  initial: { opacity: 0, x: 100, rotate: 10 },
                  whileInView: { opacity: 1, x: 0, rotate: 0 },
                  whileHover: {
                    scale: 1.05,
                    rotate: -2,
                    transition: { duration: 0.3 },
                  },
                },
              ];

              return (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow cursor-pointer"
                  initial={variants[index].initial}
                  whileInView={variants[index].whileInView}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    type: "spring",
                    bounce: 0.4,
                  }}
                  whileHover={variants[index].whileHover}
                >
                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.2, 1.2, 1.2, 1],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-12 h-12 text-purple-600 mb-4" />
                  </motion.div>
                  <motion.h3
                    className="text-xl mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
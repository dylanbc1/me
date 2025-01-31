import Image from 'next/image'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  SiJavascript, SiPython, SiR, SiScala, SiCplusplus, 
  SiReact, SiSpring, SiNodedotjs, SiNestjs, SiNextdotjs, SiDjango, 
  SiFastapi, SiDocker, SiGit, SiPostman, SiScikitlearn, SiJest, 
  SiOracle, SiTailwindcss, SiTensorflow, SiTypescript
} from 'react-icons/si'
import { DiJava } from 'react-icons/di'

const skills = [
  { name: 'Java', icon: DiJava },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'R', icon: SiR },
  { name: 'Scala', icon: SiScala },
  { name: 'C++', icon: SiCplusplus },
  { name: 'React', icon: SiReact },
  { name: 'Spring', icon: SiSpring },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Nest.js', icon: SiNestjs },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Django', icon: SiDjango },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'Docker', icon: SiDocker },
  { name: 'Git', icon: SiGit },
  { name: 'Postman', icon: SiPostman },
  { name: 'Scikit-Learn', icon: SiScikitlearn },
  { name: 'Jest', icon: SiJest },
  { name: 'PL/SQL', icon: SiOracle },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'TensorFlow', icon: SiTensorflow },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-4 md:space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
              <li key={item} className={`animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700"
        >
          <div className="text-center px-4 animate-fade-in">
            <Image
              src="https://res.cloudinary.com/dxhi8xsyb/image/upload/v1738339056/me2_y5yd70.png"
              alt="Dylan Bermudez Cardona"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 border-4 border-white shadow-lg"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              Dylan Bermudez Cardona
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
              Software Engineer | Full-Stack | DevOps | AI & ML | Data Scientist
            </p>
            <div className="flex justify-center space-x-4">
              {[
                { icon: Github, href: "https://github.com/dylanbc1", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/dylan-bermudez-cardona", label: "LinkedIn" },
                { icon: Mail, href: "mailto:dyez1110@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }, index) => (
                <Button
                  key={label}
                  variant="outline"
                  size="icon"
                  className={`bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-700/80 transition-colors animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-gray-800 dark:text-white" />
                    <span className="sr-only">{label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="container mx-auto px-4 md:px-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
                I'm Dylan Bermudez Cardona, a passionate and innovative software developer with expertise in web
                development, DevOps, artificial intelligence, machine learning, and data science. My approach combines technical
                proficiency with creative problem-solving, always pushing the boundaries of what's possible in software
                development.
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                As a disciplined and proactive professional, I excel in developing robust software solutions, conducting
                thorough testing, and implementing cutting-edge AI and ML algorithms. I thrive in collaborative
                environments where I can contribute my leadership skills and positive attitude, constantly seeking new
                challenges and opportunities to improve both myself and the projects I work on.
              </p>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-800 dark:to-gray-700
          pt-20 pb-20"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white animate-fade-in">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg shadow-md p-4 md:p-6 text-center transform hover:scale-105 transition-all duration-300 border border-white/50 dark:border-gray-700/50 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <skill.icon className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 text-gray-800 dark:text-gray-200" />
                  <p className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 pt-20 pb-20"
        >
          <div className="container mx-auto md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white animate-fade-in">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {[
                {
                  image: "https://res.cloudinary.com/dxhi8xsyb/image/upload/v1738340417/dmajor_ltzhhl.png",
                  name: "E-Commerce Web",
                  description: "Robust E-Commerce web for tech products.",
                  link: "https://github.com/dylanbc1/dmjs-front",
                },
                {
                  image: "https://res.cloudinary.com/dxhi8xsyb/image/upload/v1738339977/expertsystemcars_fpitqy.png",
                  name: "AI-Powered Chat Bot",
                  description: "A sophisticated chatbot using expert systems and ML algorithms.",
                  link: "https://github.com/dylanbc1/chatbot-car-backend",
                },
                {
                  image: "https://res.cloudinary.com/dxhi8xsyb/image/upload/v1738340417/movementdetector_nfal23.png",
                  name: "AI for movement detector",
                  description: "Artificial intelligence to identify people's movements in real time.",
                  link: "https://github.com/dylanbc1/parkinson-AI",
                },
                
              ].map((project, index) => (
                <div
                  key={project.name}
                  className={`bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                      {project.name}
                    </h3>
                    <p className="text-sm md:text-base dark:text-gray-300 mb-4">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="w-full hover:bg-gray-300 transition-colors"
                      >
                        View Project
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700"
        >
          <div className="container mx-auto px-4 text-gray-200 md:px-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
              Contact Me
            </h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <a href="https://wa.me/3173503132" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button
                  type="button"
                  className="w-full bg-white hover:bg-gray-100 text-gray-800 hover:bg-gray-300 font-semibold transition-colors flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message on WhatsApp
                </Button>
              </a>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-700 dark:text-gray-300">
          <p>&copy; 2024 Dylan Bermudez Cardona. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

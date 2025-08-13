import React from 'react'

export default function Skills() {
  const skills = [
    { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  return (
    <section id="skills" className="bg-gradient-to-b from-gray-900 to-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-4">
          My <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Here are the technologies and tools I use to bring projects to life.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:shadow-pink-500/20 hover:scale-105 transition-all duration-300"
            >
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
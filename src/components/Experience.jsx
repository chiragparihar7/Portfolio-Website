import { BriefcaseIcon } from "@heroicons/react/24/solid";

export default function Experience() {
  const experiences = [
    {
      role: "ReactJS Intern",
      company: "CodeCrafters",
      duration: "Fab 2025 - Present",
      description:
      "Worked on building reusable components, improving performance, and collaborating in a fast-paced Agile team environment.",
    },
    {
      role: "Frontend Developer",
      company: "Aom Web Designer",
      duration: "July 2024 - Fab 2025",
      description:
        "Created interactive, high-performance user interfaces with ReactJS, TailwindCSS, and API integrations, ensuring pixel-perfect designs.",
    },
    {
      role: "Web Development Trainee",
      company: "Maruti Infotech",
      duration: "2021 - 2022",
      description:
        "Learned fundamentals of HTML, CSS, JavaScript, and deployed multiple responsive projects using GitHub Pages.",
    },
  ];

  return (
    <section id="experience" className="bg-gray-950 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          My <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Here’s an overview of my professional journey so far.
        </p>

        {/* Card Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl p-1 hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gray-900 rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <BriefcaseIcon className="h-8 w-8 text-orange-300" />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-pink-400 text-sm">{exp.company}</p>
                  </div>
                </div>
                <span className="block text-sm text-gray-400 mb-2">{exp.duration}</span>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built with ReactJS, Tailwind CSS, and Framer Motion.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      link: "#",
      tech: ["ReactJS", "Tailwind", "Framer Motion"]
    },
    {
      title: "E-commerce App",
      desc: "A fully functional e-commerce store with product filtering, cart, and payment gateway.",
      img: "https://images.unsplash.com/photo-1515165562835-c4c4c4b3e3b3?auto=format&fit=crop&w=800&q=80",
      link: "#",
      tech: ["ReactJS", "Redux", "Stripe"]
    },
    {
      title: "Blog Platform",
      desc: "A modern blog app with markdown support, user authentication, and admin dashboard.",
      img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      link: "#",
      tech: ["Next.js", "Tailwind", "MongoDB"]
    },
  ];

  return (
    <section id="projects" className="bg-gray-950 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          My <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          A showcase of my latest works, side projects, and experiments in web development.
        </p>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:shadow-pink-500/20 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 text-white font-medium hover:opacity-90 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


import React from 'react'

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20"
    >
      {/* Decorative Shape */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
        >
          <circle cx="400" cy="400" r="400" fill="url(#grad)" />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff0080" />
              <stop offset="100%" stopColor="#7928ca" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Image */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Team Work"
            className="rounded-3xl shadow-2xl object-cover w-full h-[500px] transition-transform duration-500 group-hover:scale-105"
          />

          {/* Glassmorphism Card */}
          <div className="absolute bottom-6 left-6 backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">Frontend Developer</h3>
            <p className="text-gray-300">ReactJS | Tailwind CSS | UI/UX</p>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let’s Build Something  
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent"> Amazing Together</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I’m a frontend developer passionate about crafting visually appealing and high-performing web applications. With expertise in ReactJS and Tailwind CSS, I create digital experiences that are both beautiful and functional.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            My goal is to turn ideas into reality through clean code and creative design, always putting the user experience first.
          </p>

          {/* Buttons */}
          <div className="flex gap-6">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg shadow-lg hover:scale-105 transition"
            >
              See My Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}





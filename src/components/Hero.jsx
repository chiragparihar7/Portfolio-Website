import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-blue-600 via-indigo-700 to-purple-700"
    >
      {/* Decorative glowing circles */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-white/10 blur-3xl md:h-80 md:w-80 motion-safe:animate-pulse" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-yellow-300/20 blur-3xl md:h-80 md:w-80 motion-safe:animate-pulse" />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2">

          {/* Text Column */}
          <div className="text-center lg:text-left">
            {/* Animated Role */}
            <h2 className="text-2xl md:text-3xl font-medium text-white/90">
              <TypeAnimation
                sequence={[
                  "ReactJS Developer 💻",
                  2000,
                  "Frontend Enthusiast 🚀",
                  2000,
                  "UI/UX Learner 🎨",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>

            {/* Main Heading */}
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Chirag Parihar
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 sm:text-lg md:text-xl lg:mx-0">
              I craft modern, responsive, and high-performance web apps with
              React & Tailwind, focusing on clean UI, speed, and accessibility.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-6 justify-center lg:justify-start">
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

            {/* Quick Links */}
            <div className="mt-3 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/80 sm:mt-4 sm:text-sm lg:justify-start">
              <a href="#skills" className="hover:text-white">Skills</a>
              <span aria-hidden="true" className="hidden sm:inline">•</span>
              <a href="#experience" className="hover:text-white">Experience</a>
              <span aria-hidden="true" className="hidden sm:inline">•</span>
              <a href="/Chirag_Parihar_Resume.pdf" className="hover:text-white">Download Resume</a>
            </div>
          </div>

          {/* Image Column */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-tr from-yellow-300 via-pink-500 to-orange-400 opacity-80 blur-xl motion-safe:animate-spin-slow" />
              <div className="rounded-full p-[3px] bg-gradient-to-tr from-yellow-300 via-pink-500 to-orange-500">
                <img
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                  alt="Portrait of Chirag Parihar"
                  className="block aspect-square w-40 rounded-full object-cover shadow-xl sm:w-56 md:w-64 lg:w-72"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

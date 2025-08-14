import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-400 text-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12">

        {/* About */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-3">
            Chirag
            <span className="bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              Parihar
            </span>
          </h2>
          <p className="text-gray-200 leading-relaxed">
            ReactJS Developer building modern, responsive, and interactive web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-white transition duration-300 relative group"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:chiragparihar118@gmail.com" className="hover:text-white">chiragparihar118@gmail.com</a></li>
            <li>Phone: <a href="tel:+911234567890" className="hover:text-white">+91 8003155718</a></li>
            <li>Location: Ahmedabad, India</li>
          </ul>

          {/* Social Icons */}
          <div className="flex mt-4 gap-4">
            {[
              { icon: "fab fa-github", link: "https://github.com/yourusername" },
              { icon: "fab fa-linkedin-in", link: "https://linkedin.com/in/yourusername" },
              { icon: "fas fa-envelope", link: "mailto:chiragparihar118@gmail.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-purple-700 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white transform hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-sm text-gray-100 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Chirag Parihar. Designed with ❤️ and ReactJS.
      </div>
    </footer>
  );
}


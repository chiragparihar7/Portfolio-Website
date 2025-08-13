import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <nav className="sticky top-0 w-full bg-gradient-to-r from-purple-700 via-pink-600 to-orange-400 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo / Name */}
        <h1 className="text-2xl font-extrabold tracking-wide drop-shadow-lg text-white">
          Chirag{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-300 bg-clip-text text-transparent">
            Parihar
          </span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white transition-all duration-300 group-hover:text-yellow-300"
              >
                {item}
              </a>
              {/* Underline animation */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-white hover:bg-white/20 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-purple-700 via-pink-600 to-orange-400 shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4 text-white">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg hover:text-yellow-300 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

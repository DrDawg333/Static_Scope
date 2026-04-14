import { useState } from "react";
import { FaPython, FaJava, FaCode } from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";
import LanguageCard from "./LanguageCard";

function App() {
  const [isAuthenticated] = useState(true);
  const userEmail = "john.snow@example.com";

  const languages = [
    { name: "Python", icon: FaPython, color: "text-blue-400", accept: ".py" },
    { name: "Java", icon: FaJava, color: "text-red-400", accept: ".java" },
    { name: "C", icon: SiC, color: "text-blue-300", accept: ".c" },
    { name: "C++", icon: SiCplusplus, color: "text-green-400", accept: ".cpp,.h" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#020617] text-slate-200">

      {/* Navbar */}
      <nav className="bg-gray-900/80 backdrop-blur-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3">
            <FaCode className="text-white text-xl" />
          </div>
          <span className="text-xl font-bold text-white">StaticScope</span>
        </div>

        <div className="hidden md:flex space-x-8 text-gray-300">
          <a
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("about");
              window.scrollTo({
                top: el.offsetTop,
                behavior: "smooth",
              });
            }}
            className="hover:text-white cursor-pointer"
          >
            About
          </a>

          <a
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("tools");
              window.scrollTo({
                top: el.offsetTop,
                behavior: "smooth",
              });
            }}
            className="hover:text-white cursor-pointer"
          >
            Tools
          </a>

          <a href="#" className="hover:text-white cursor-pointer">
            Sign In
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-white mb-6">
          Advanced Code Complexity Analysis
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
          StaticScope helps developers identify complex, risky, and potentially buggy code before it becomes a problem. Supports Python, Java, C, and C++ with intelligent static analysis.
        </p>

        <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-lg text-white hover:scale-105 transition">
          Get Started
        </button>
      </section>

      {/* About */}
      <section id="about" className="py-12 px-4">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          About StaticScope
        </h2>

        <div className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-md p-8 rounded-xl border border-gray-700">
          <p className="text-gray-300 text-center mb-6">
            StaticScope is a static code analysis platform designed to evaluate code quality, complexity, and defect risk. By analyzing your code before runtime, we help you identify potential issues that could lead to bugs, security vulnerabilities, or maintenance challenges.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center justify-center p-4 bg-gray-800/50 rounded-lg">
              <FaPython className="text-3xl text-blue-400" />
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-800/50 rounded-lg">
              <FaJava className="text-3xl text-red-400" />
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-800/50 rounded-lg">
              <SiC className="text-3xl text-blue-300" />
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-800/50 rounded-lg">
              <SiCplusplus className="text-3xl text-green-400" />
            </div>
          </div>

          <p className="text-gray-300 text-center">
            Early detection of risky code patterns helps reduce technical debt, improve code maintainability, and prevent costly bugs in production environments. Our platform provides actionable insights to help you write cleaner, more efficient code.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="py-12 px-4">
        {isAuthenticated && (
          <div className="max-w-6xl mx-auto">

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                Code Analysis Tools
              </h2>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-3">
                  <span className="text-white font-medium">JS</span>
                </div>

                <span className="text-gray-300">{userEmail}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {languages.map((lang, i) => (
                <LanguageCard key={i} lang={lang} />
              ))}
            </div>

          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        © 2026 StaticScope
      </footer>
    </div>
  );
}

export default App;
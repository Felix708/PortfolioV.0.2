import faceImage from "./assets/placeholder-face.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans scroll-smooth">
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-md border-b border-slate-800">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter">
            <span className="text-blue-400">S.F</span>elix
          </div>
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <a href="#home" className="hover:text-indigo-400 transition-colors uppercase tracking-widest px-2 py-1">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-indigo-400 transition-colors uppercase tracking-widest px-2 py-1">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-400 transition-colors uppercase tracking-widest px-2 py-1">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pb-20">
          <img
            src={faceImage}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-se-[30%] rounded-es-[30%] rounded-ss-[10%] rounded-ee-[10%] border-4 border-slate-800 shadow-2xl mb-10 hover:scale-105 transition-all duration-300"
          />
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
            <span className="text-blue-500">はじめまして！</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
            An aspiring student in Computer Science to develop stuff as a hobby! and what you're seeing now, is one of my humble projects! 😊
          </p>
          <a
            href="#about"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20"
          >
            See More!
          </a>
        </section>

        <section id="about" className="min-h-screen flex flex-col justify-center bg-slate-900 px-6 py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src={faceImage}
                alt="Profile"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-800 shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-black mb-8 border-l-4 border-blue-500 pl-4">About Me</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I am a passionate software developer with a focus on creating intuitive and visually stunning user interfaces. With 5 years of experience in the industry, I've worked with various startups and brands to bring their digital visions to life.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800 rounded-xl hover:bg-slate-700 duration-300 hover:scale-105 transition-all">
                  <h3 className="font-bold text-blue-400 mb-1">Frontend</h3>
                  <p className="text-sm text-slate-400">React, Tailwind, NextJS</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-xl hover:bg-slate-700 duration-300 hover:scale-105 transition-all">
                  <h3 className="font-bold text-blue-400 mb-1">Backend</h3>
                  <p className="text-sm text-slate-400">NodeJS, MongoDB, PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-[20vh] flex flex-col justify-center items-center px-6 py-10 text-center">
          <div className="max-w-3xl w-full">
            <h2 className="text-4xl font-black mb-6">Get In Touch</h2>
            <p className="text-lg text-slate-400 mb-12">
              Have a project in mind? Let's build something amazing together.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
              <a href="mailto:hello@example.com" className="text-xl font-bold hover:text-indigo-400 transition-colors">
                hello@example.com
              </a>
              <a href="#" className="text-xl font-bold hover:text-indigo-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-xl font-bold hover:text-indigo-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8 bg-slate-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-50 text-sm">
          <div>© 2026 Portfolio. Built with React.</div>
          <div className="mt-4 md:mt-0 text-slate-400">Samuel Felix</div>
        </div>
      </footer>
    </div>
  );
}
import faceImage from "./assets/placeholder-face.jpg";
import NavbarComponent from "./components/NavbarComponent";
import ExperienceCardComponent from "./components/ExperienceCardComponent";
import BluePillButtonComponent from "./components/BluePillButtonComponent";
import ContactCardComponent from "./components/ContactCardComponent";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export default function App() {
  return (
    // header nav
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans scroll-smooth">
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-md border-b border-slate-800">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <NavbarComponent />
        </nav>
      </header>

      {/* main: about */}
      <main>
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-10">
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
          <BluePillButtonComponent text="See More!" href="#about" />
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
                <ExperienceCardComponent
                  title="Frontend"
                  skills="React, Tailwind, NextJS"
                />
                <ExperienceCardComponent
                  title="Backend"
                  skills="NodeJS, MongoDB, PostgreSQL"
                />
              </div>
            </div>
          </div>
        </section>

        {/* main: contact */}
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-slate-950 relative overflow-hidden">
          {/* Background Accents for Premium Look */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>

          <div className="max-w-6xl w-full text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Get In <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Touch</span>
            </h2>
            <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <ContactCardComponent
                title="Phone"
                content="+62 0813-8312-842#"
                icon={<MdOutlineLocalPhone />}
                >
                <BluePillButtonComponent
                  text="Copy Number"
                  border
                />
              </ContactCardComponent>

              <ContactCardComponent
                title="Email"
                content="FelixChessGuy@gmail.com"
                icon={<MdOutlineEmail />}
              >
                <BluePillButtonComponent
                  text="Send Email!"
                />
              </ContactCardComponent>

              <ContactCardComponent
                title="Instagram"
                content="my account: @felixetc_"
                icon={<FaInstagram />}
              >
                <BluePillButtonComponent
                  text="Follow Me!"
                  href="https://instagram.com/felixetc_"
                  border
                />
              </ContactCardComponent>

            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 px-6 py-8 bg-slate-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-50 text-sm">
          <div>© 2026 Portfolio. Built with love.</div>
          <div className="mt-4 md:mt-0 text-slate-400">Samuel Felix</div>
        </div>
      </footer>
    </div>
  );
}
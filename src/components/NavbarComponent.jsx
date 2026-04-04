import { Link } from "react-router-dom";

export default function NavbarComponent({ pageState }) {
    return (
        <div className="flex items-center justify-between px-10 py-6 sticky top-0 bg-slate-700/40 backdrop-blur-md z-50 border-b border-slate-800">
            <div className="text-2xl font-black">
                {pageState ? (
                    <Link to="/" className="underline-animation">
                        <span className="text-blue-400">S.F</span>elix
                    </Link>
                ) : (
                    <a href="#home" className="underline-animation">
                        <span className="text-blue-400">S.F</span>elix
                    </a>
                )}
            </div>
            <ul className="flex space-x-8 text-sm font-medium">
                <li>
                    {pageState ? (
                        <Link to="/" className="hover:text-blue-400 transition-colors uppercase tracking-widest px-2 py-1 underline-animation">
                            Home
                        </Link>
                    ) : (
                        <a href="#home" className="hover:text-blue-400 transition-colors uppercase tracking-widest px-2 py-1 underline-animation">
                            Home
                        </a>
                    )}
                </li>
                {!pageState && (
                    <>
                        <li>
                            <a href="#about" className="hover:text-blue-400 transition-colors uppercase tracking-widest px-2 py-1 underline-animation">About</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-blue-400 transition-colors uppercase tracking-widest px-2 py-1 underline-animation">Contact</a>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-blue-400 transition-colors uppercase tracking-widest px-2 py-1 underline-animation">Projects</Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    )
}
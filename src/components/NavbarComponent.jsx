export default function NavbarComponent() {
    return (
        <>
            <div className="text-2xl font-black">
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
        </>
    )
}
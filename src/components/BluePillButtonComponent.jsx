export default function BluePillButtonComponent({ href, text, border }) {
    return (
        <a
            href={href}
            className={`px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 inline-block text-center cursor-pointer ${border ? "border-2 border-blue-600 text-blue-400" : "bg-blue-600 text-white"}`}
        >
            {text}
        </a>
    )
}

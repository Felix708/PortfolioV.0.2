export default function ExperienceCardComponent({ title, skills }) {
    return (
        <div className="bg-slate-800 rounded-xl hover:bg-slate-700 duration-300 hover:scale-105 transition-all px-6 py-4 cursor-default">
            <h3 className="font-bold text-blue-400 mb-1">{title}</h3>
            <p className="text-sm text-slate-400">{skills}</p>
        </div>
    );
}
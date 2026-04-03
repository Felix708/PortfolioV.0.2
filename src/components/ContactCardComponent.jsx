export default function ContactCardComponent({title, content, icon, children}) {
    return (
        <div className="group p-10 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl hover:border-blue-500 transition-all duration-300 hover:scale-105 flex flex-col h-full">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-blue-500/20 transition-colors">
                <div className="text-3xl text-blue-400 font-bold">{icon}</div>
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-lg text-slate-400 font-medium mb-6">{content}</p>
            {children && <div className="mt-auto">{children}</div>}
        </div>
    )
}
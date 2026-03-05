import { useState, useEffect } from 'react';
import BlurImage from './BlurImage';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';

// Import Icons
import iconVue from '../../assets/techicons/Vue.js.png';
import iconReact from '../../assets/techicons/React.png';
import iconPostgres from '../../assets/techicons/PostgresSQL.png';
import iconNode from '../../assets/techicons/JavaScript.png'; // Using JS icon for Node if specific node icon missing, or just assume Node logic later
import iconTailwind from '../../assets/techicons/Tailwind CSS.png';
import iconTS from '../../assets/techicons/TypeScript.png';
import iconVite from '../../assets/techicons/Vite.js.png';
import iconPython from '../../assets/techicons/Python.png';
import iconRabbit from '../../assets/techicons/RabbitMQ.png';
import iconDocker from '../../assets/techicons/Docker.png';
import iconMUI from '../../assets/techicons/Material UI.png';
import iconAngular from '../../assets/techicons/AngularJS.png';

const getTechIcon = (techName: string) => {
    const normalize = techName.toLowerCase();
    if (normalize.includes('vue')) return iconVue;
    if (normalize.includes('react')) return iconReact;
    if (normalize.includes('postgres')) return iconPostgres;
    if (normalize.includes('node')) return iconNode;
    if (normalize.includes('tailwind')) return iconTailwind;
    if (normalize.includes('typescript')) return iconTS;
    if (normalize.includes('vite')) return iconVite;
    if (normalize.includes('python')) return iconPython;
    if (normalize.includes('rabbit')) return iconRabbit;
    if (normalize.includes('docker')) return iconDocker;
    if (normalize.includes('nestjs')) return iconTS;
    if (normalize.includes('material')) return iconMUI;
    if (normalize.includes('mui')) return iconMUI;
    if (normalize.includes('angular')) return iconAngular;
    if (normalize.includes('manifest')) return iconNode;
    return null;
};

const ProjectShowcase = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const activeProject = projects[activeIndex] || projects[0];

    useEffect(() => {
        if (isHovering) return;

        const interval = setInterval(() => {
            setActiveIndex(current =>
                (current + 1) % projects.length
            );
        }, 8000);

        return () => clearInterval(interval);
    }, [isHovering]);

    const handleProjectChange = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div
            className="w-full max-w-7xl mx-auto px-6 py-20"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                {/* LEFT: Project Numbers Navigation */}
                <div className="flex lg:flex-col gap-4 lg:gap-6 justify-start items-center lg:items-start w-full lg:w-auto z-10">
                    {projects.map((project, index) => (
                        <button
                            key={project.id}
                            onClick={() => handleProjectChange(index)}
                            className="group relative flex items-center gap-3 focus:outline-none"
                        >
                            <span
                                className={`text-4xl lg:text-7xl font-bold font-mono transition-all duration-500 ${activeIndex === index
                                    ? 'text-white scale-110'
                                    : 'text-white/10 hover:text-white/30 scale-100'
                                    }`}
                            >
                                0{index + 1}
                            </span>

                            {activeIndex === index && (
                                <motion.div
                                    layoutId="activeLine"
                                    className="hidden lg:block w-8 h-1 bg-white rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* CENTER & RIGHT: Project Preview + Details Side by Side */}
                <div className="flex-1 w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProject.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                        >
                            {/* LEFT SIDE: Project Preview (Images) - Larger Area */}
                            <div className="space-y-4 lg:col-span-8">
                                <div className={`w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${activeProject.color} relative group`} style={{ aspectRatio: activeProject.imageFit === 'contain' ? '1/1' : '16/9' }}>
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover mix-blend-overlay"></div>

                                    {activeProject.imageFit === 'contain' ? (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 lg:p-4">
                                            {/* Browser Window Mockup Container */}
                                            <div className="relative w-full max-w-5xl h-full pb-0 rounded-xl border border-white/20 bg-black/80 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] flex flex-col">

                                                {/* Browser Top Bar */}
                                                <div className="w-full h-10 bg-white/10 flex items-center px-4 gap-2 border-b border-white/10 shrink-0">
                                                    {/* Browser window buttons (Mac style) */}
                                                    <div className="flex gap-1.5">
                                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                                    </div>
                                                    {/* URL Bar simulation */}
                                                    <div className="mx-auto w-1/2 max-w-sm h-5 bg-black/40 rounded-md flex items-center px-3 border border-white/5">
                                                        <span className="text-[10px] text-white/40 block w-full text-center truncate">
                                                            {activeProject.title} - chrome-extension://
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Browser Content Layout (Blurred background + centered Side Panel) */}
                                                <div className="flex-1 w-full flex overflow-hidden relative">

                                                    {/* Blurred background using the extension thumbnail */}
                                                    <div className="absolute inset-0">
                                                        <img
                                                            src={activeProject.thumbnail}
                                                            alt=""
                                                            className="w-full h-20 object-cover scale-110"
                                                            style={{ filter: 'blur(24px) brightness(0.25) saturate(1.5)' }}
                                                        />
                                                    </div>

                                                    {/* Centered Side Panel mockup */}
                                                    <div className="relative z-10 flex items-center justify-center w-full h-full py-0 gap-4 lg:gap-8">

                                                        {/* Left website skeleton - visible on larger screens */}
                                                        <div className="hidden lg:flex flex-col gap-3 w-[80px] shrink-0 opacity-30 mt-6 md:mt-10 self-start">
                                                            <div className="w-full h-6 bg-white/10 rounded-md"></div>
                                                            <div className="w-3/4 h-4 bg-white/10 rounded-md"></div>
                                                            <div className="w-5/6 h-4 bg-white/10 rounded-md"></div>
                                                            <div className="w-2/3 h-4 bg-white/10 rounded-md"></div>
                                                            <div className="w-full h-20 bg-white/5 rounded-lg mt-2"></div>
                                                            <div className="w-full h-20 bg-white/5 rounded-lg"></div>
                                                        </div>

                                                        {/* Side Panel Extension - main focus */}
                                                        <div className="h-full w-[280px] sm:w-[320px] lg:w-[380px] max-w-full bg-[#0a0a0a] shadow-[0_0_60px_rgba(168,85,247,0.25)] border border-white/10 flex flex-col shrink-0 rounded-lg overflow-hidden">
                                                            {/* Extension Header */}
                                                            <div className="w-full h-10 bg-white/5 border-b border-white/10 flex items-center px-3 justify-between shrink-0">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-5 h-5 rounded bg-purple-500/30 flex items-center justify-center">
                                                                        <span className="text-purple-400 text-[9px] font-bold">EX</span>
                                                                    </div>
                                                                    <span className="text-white/80 text-xs font-medium truncate max-w-[120px]">{activeProject.title}</span>
                                                                </div>
                                                                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                                                    <svg className="w-2.5 h-2.5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                                                </div>
                                                            </div>
                                                            {/* Extension Screenshot */}
                                                            <div className="flex-1 w-full overflow-hidden">
                                                                <BlurImage
                                                                    src={activeProject.thumbnail}
                                                                    alt={activeProject.title}
                                                                    className="w-full h-full object-cover object-top"
                                                                    containerClassName="w-full h-full"
                                                                />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <BlurImage
                                            src={activeProject.thumbnail}
                                            alt={activeProject.title}
                                            className="w-full h-full object-cover"
                                            containerClassName="w-full h-full"
                                        />
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8">
                                        <div className="flex items-center gap-3 text-sm mb-3">
                                            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white font-medium">
                                                {activeProject.year}
                                            </span>
                                            <span className="text-white/80 uppercase tracking-widest text-xs font-bold">
                                                {activeProject.category}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                                            {activeProject.title}
                                        </h3>
                                    </div>

                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex items-center justify-center backdrop-blur-[2px]">
                                        <div className="text-center space-y-4 transform scale-95 group-hover:scale-100 transition-transform duration-300">
                                            <p className="text-white/90 text-lg font-medium px-4">Preview do Projeto</p>
                                            <div className="flex gap-4 justify-center">
                                                {activeProject.details.links.github && (
                                                    <a
                                                        href={activeProject.details.links.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-xl"
                                                    >
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                        </svg>
                                                        Ver Código
                                                    </a>
                                                )}
                                                {activeProject.details.links.live && (
                                                    <a
                                                        href={activeProject.details.links.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-6 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center gap-2"
                                                    >
                                                        {activeProject.details.links.demoConfig?.type === 'video' ? (
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        ) : (
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                            </svg>
                                                        )}
                                                        {activeProject.details.links.demoConfig?.label || "Live Demo"}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* MOBILE ACTION BUTTONS (Visible below image on small screens) */}
                                <div className="flex lg:hidden flex-col gap-3 mt-6">
                                    {activeProject.details.links.github && (
                                        <a
                                            href={activeProject.details.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full px-6 py-3 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl hover:bg-gray-200 transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                            Ver Código Github
                                        </a>
                                    )}
                                    {activeProject.details.links.live && (
                                        <a
                                            href={activeProject.details.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full px-6 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
                                        >
                                            {activeProject.details.links.demoConfig?.type === 'video' ? (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            )}
                                            {activeProject.details.links.demoConfig?.label || "Acessar Demo Live"}
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* RIGHT SIDE: Simplified Details (Description + Tech Stack) */}
                            <div className="flex flex-col gap-8 lg:col-span-4 h-full justify-center">
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="text-purple-400">⚡</span> Sobre o Projeto
                                    </h4>
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        {activeProject.details.overview.description}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-white/50 uppercase tracking-wider mb-4">Stack Tecnológico</p>
                                    <div className="flex flex-wrap gap-3">
                                        {activeProject.details.overview.stack.map((tech: string) => {
                                            const icon = getTechIcon(tech);
                                            return (
                                                <span
                                                    key={tech}
                                                    className="group relative px-4 py-2 rounded-xl text-sm font-bold bg-white/5 border border-white/10 text-white flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-default overflow-hidden"
                                                >
                                                    {/* Glow effect on hover */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>

                                                    {icon ? (
                                                        <BlurImage
                                                            src={icon}
                                                            alt={tech}
                                                            className="w-5 h-5 object-contain drop-shadow-md"
                                                            containerClassName="w-5 h-5 flex items-center justify-center"
                                                        />
                                                    ) : (
                                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                                    )}
                                                    <span className="relative z-10 text-gray-200 group-hover:text-white transition-colors">{tech}</span>
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
};

export default ProjectShowcase;
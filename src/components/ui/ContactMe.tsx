import MagneticButton from './MagneticButton';
import { useState } from 'react';

const ContactMe = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        e.preventDefault();
        navigator.clipboard.writeText("phdacruzsantos.dev@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-6 pb-20 pt-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">
                Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Criar Algo Incrível?</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {/* LinkedIn */}
                <MagneticButton 
                    href="https://www.linkedin.com/in/phdacruzsantos/" 
                    className="group w-20 h-20 md:w-24 md:h-24 bg-[#0e76a8]/10 rounded-full border border-[#0e76a8]/30 hover:border-[#0e76a8] hover:bg-[#0e76a8]/20 hover:shadow-[0_0_30px_rgba(14,118,168,0.3)]"
                >
                    <svg className="w-8 h-8 md:w-10 md:h-10 fill-current text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-bold text-white/50 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 text-center whitespace-nowrap">LinkedIn</span>
                </MagneticButton>

                {/* GitHub */}
                <MagneticButton 
                    href="https://github.com/PHdaCruzSantos" 
                    className="group w-20 h-20 md:w-24 md:h-24 bg-white/5 rounded-full border border-white/10 hover:border-white hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                    <svg className="w-8 h-8 md:w-10 md:h-10 fill-current text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-bold text-white/50 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 text-center whitespace-nowrap">GitHub</span>
                </MagneticButton>

                {/* Email Container with Side Copy Button */}
                <div className="relative flex items-center group/email gap-4">
                    <MagneticButton 
                        href="mailto:phdacruzsantos.dev@gmail.com" 
                        className="group w-20 h-20 md:w-24 md:h-24 bg-red-500/10 rounded-full border border-red-500/30 hover:border-red-500 hover:bg-red-500/20 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] z-10"
                    >
                        <svg className="w-8 h-8 md:w-10 md:h-10 fill-none stroke-current text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-bold text-white/50 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 text-center whitespace-nowrap">Enviar Email</span>
                    </MagneticButton>

                    {/* Side Copy Button */}
                    <button
                        onClick={handleCopyEmail}
                        className={`
                            absolute left-full ml-4 md:ml-6 px-4 py-2 rounded-xl backdrop-blur-md border shadow-xl flex items-center gap-2 transition-all duration-300
                            ${copied 
                                ? "bg-green-500/20 border-green-500 text-green-400 opacity-100 translate-x-0" 
                                : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:scale-105 opacity-0 -translate-x-4 group-hover/email:opacity-100 group-hover/email:translate-x-0 pointer-events-none group-hover/email:pointer-events-auto"}
                        `}
                        title="Copiar endereço de email"
                    >
                        {copied ? (
                            <>
                                <span className="font-bold">Copiado!</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </>
                        ) : (
                            <>
                                <span className="text-sm">Copiar Email</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div className="mt-20 border-t border-white/5 pt-8">
                 <p className="text-white/20 text-sm">
                    © 2026. Projetado e desenvolvido com React, Tailwind e Framer Motion.
                </p>
            </div>
        </div>
    );
};

export default ContactMe;

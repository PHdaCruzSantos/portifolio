import { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre Mim', id: 'aboutMe' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projetos', id: 'projects' },
    { name: 'Certificados', id: 'certificates' },
    { name: 'Contato', id: 'contact' },
];

const PillNav = () => {
    const [active, setActive] = useState('hero');

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <nav className="flex items-center gap-2 p-2 bg-black/20 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setActive(item.id)}
                        className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                            active === item.id ? 'text-black' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        {active === item.id && (
                            <motion.div
                                layoutId="pill-nav-active"
                                className="absolute inset-0 bg-white rounded-full z-0"
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{item.name}</span>
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default PillNav;

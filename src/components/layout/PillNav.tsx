import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const handleNavClick = (id: string) => {
        setActive(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* DESKTOP NAV: Centered Pill */}
            <div className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
                <nav className="flex items-center gap-2 p-2 bg-black/20 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => handleNavClick(item.id)}
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

            {/* MOBILE NAV: Hamburger Button */}
            <div className="md:hidden fixed top-6 right-6 z-50">
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white shadow-lg relative overflow-hidden group"
                >
                     <div className="relative w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                        <motion.span 
                            animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
                            className="w-full h-0.5 bg-white origin-center transition-transform"
                        />
                         <motion.span 
                            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                            className="w-full h-0.5 bg-white transition-opacity"
                        />
                         <motion.span 
                            animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
                            className="w-full h-0.5 bg-white origin-center transition-transform"
                        />
                     </div>
                </button>
            </div>

            {/* MOBILE DRAWER: Side Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />
                        
                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#0a0a0a] border-l border-white/10 shadow-2xl z-50 md:hidden p-8 flex flex-col"
                        >
                            <div className="flex-1 flex flex-col justify-center gap-6">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={() => handleNavClick(item.id)}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        className={`text-2xl font-bold flex items-center gap-4 ${
                                            active === item.id ? 'text-white' : 'text-gray-500'
                                        }`}
                                    >
                                        <span className={`w-2 h-2 rounded-full ${active === item.id ? 'bg-purple-500' : 'bg-transparent border border-white/20'}`} />
                                        {item.name}
                                    </motion.a>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <p className="text-gray-500 text-sm">© 2025. Construído com ❤️</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default PillNav;

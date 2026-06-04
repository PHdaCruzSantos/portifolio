import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from '../ui/ThemeSwitcher';

const navItems = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'aboutMe' },
    { name: 'Stack', id: 'skills' },
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
                <nav className="flex items-center gap-2 border border-[var(--cv-ink)]/25 bg-[var(--cv-paper)]/90 p-2 shadow-none backdrop-blur-md">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => handleNavClick(item.id)}
                            className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                                active === item.id ? 'text-[var(--cv-paper-soft)]' : 'text-[var(--cv-muted)] hover:text-[var(--cv-ink)]'
                            }`}
                        >
                            {active === item.id && (
                                <motion.div
                                    layoutId="pill-nav-active"
                                    className="absolute inset-0 bg-[var(--cv-accent)] z-0"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </a>
                    ))}
                    <div className="ml-2 border-l border-[var(--cv-ink)]/20 pl-2">
                        <ThemeSwitcher compact />
                    </div>
                </nav>
            </div>

            {/* MOBILE NAV: Hamburger Button */}
            <div className="md:hidden fixed top-6 right-6 z-50">
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-3 bg-[var(--cv-paper)]/90 backdrop-blur-md border border-[var(--cv-ink)]/25 text-[var(--cv-ink)] shadow-none relative overflow-hidden group"
                >
                     <div className="relative w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                        <motion.span 
                            animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
                            className="w-full h-0.5 bg-current origin-center transition-transform"
                        />
                         <motion.span 
                            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                            className="w-full h-0.5 bg-current transition-opacity"
                        />
                         <motion.span 
                            animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
                            className="w-full h-0.5 bg-current origin-center transition-transform"
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
                            className="fixed inset-0 bg-[var(--cv-ink)]/35 backdrop-blur-sm z-40 md:hidden"
                        />
                        
                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 z-50 flex h-full w-3/4 max-w-sm flex-col border-l border-[var(--cv-ink)]/25 bg-[var(--cv-paper)] p-8 shadow-2xl md:hidden"
                        >
                            <div className="flex flex-1 flex-col justify-center gap-6">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={() => handleNavClick(item.id)}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        className={`text-2xl font-bold flex items-center gap-4 ${
                                            active === item.id ? 'text-[var(--cv-accent)]' : 'text-[var(--cv-muted)]'
                                        }`}
                                    >
                                        <span className={`w-2 h-2 rounded-full ${active === item.id ? 'bg-[var(--cv-accent)]' : 'bg-transparent border border-[var(--cv-ink)]/25'}`} />
                                        {item.name}
                                    </motion.a>
                                ))}
                            </div>

                            <div className="border-t border-[var(--cv-ink)]/20 pt-8">
                                <p className="mb-3 text-xs font-bold uppercase text-[var(--cv-accent)]">Tema</p>
                                <ThemeSwitcher />
                                <p className="mt-5 text-sm text-[var(--cv-muted)]">© 2026. Pedro Henrique</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default PillNav;

import { motion } from 'framer-motion';
import StarburstMark from './StarburstMark';

const contacts = [
    'github.com/PHdaCruzSantos',
    'phdacruzsantos.dev.br',
    'phdacruzsantos.dev@gmail.com',
];

const experiences = [
    {
        period: '2024 - Atual',
        role: 'Desenvolvedor Full Stack Freelancer',
        description:
            'Desenvolvimento de aplicações web, APIs, integrações entre sistemas, automações e manutenção de sistemas em produção. Levantamento de requisitos, deploy em VPS e melhoria contínua.',
    },
    {
        period: '2024',
        role: 'BKAPS LOG - Shipping Hub',
        description:
            'Sistema full stack em produção para automatizar o fluxo logístico de vendedores digitais, integrando vendas da Braip e Payt com emissão de etiquetas, rastreamento, gestão operacional via APIs externas e webhooks.',
    },
    {
        period: '2023 - 2026',
        role: 'Projetos Web e Produto',
        description:
            'Dashboards, extensões Chrome, aplicações mobile, pipelines em Python e interfaces responsivas com foco em clareza, arquitetura pragmática e leitura rápida para o usuário final.',
    },
];

const skills = ['React', 'Vue', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'];

const SectionHeader = ({ title, number }: { title: string; number: string }) => (
    <div className="flex items-center gap-4 border-b border-current/35 pb-2 text-[0.72rem] uppercase tracking-[-0.02em]">
        <span>{title}</span>
        <span className="ml-auto">{number}</span>
    </div>
);

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen w-full px-5 py-24 text-[var(--cv-ink)] sm:px-8 lg:px-10">
            <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
                <motion.aside
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="flex flex-col gap-10 lg:min-h-[calc(100vh-12rem)] lg:pt-2"
                >
                    <StarburstMark className="h-40 w-40 text-[var(--cv-accent)] sm:h-52 sm:w-52" />

                    <div className="grid gap-8 text-[0.76rem] leading-relaxed sm:grid-cols-3 lg:mt-auto lg:grid-cols-1">
                        <div>
                            <SectionHeader title="Contatos" number="01" />
                            <div className="mt-5 space-y-3 uppercase">
                                {contacts.map((contact) => (
                                    <p key={contact}>{contact}</p>
                                ))}
                            </div>
                        </div>

                        <div>
                            <SectionHeader title="Formação" number="03" />
                            <div className="mt-5 space-y-2">
                                <p className="text-[0.7rem]">2021 - 2027.01</p>
                                <p className="text-base font-semibold leading-tight">
                                    Universidade Federal de Ouro Preto - UFOP
                                </p>
                                <p>Sistemas de Informação</p>
                            </div>
                        </div>

                        <div>
                            <SectionHeader title="Idiomas" number="05" />
                            <div className="mt-5 space-y-3">
                                {[
                                    ['Inglês', 'C2'],
                                    ['Italiano', 'C1'],
                                    ['Espanhol', 'B2'],
                                ].map(([language, level]) => (
                                    <p key={language} className="flex justify-between gap-4">
                                        <span>{language}</span>
                                        <span>{level}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.aside>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
                    className="grid gap-9 lg:grid-cols-[1fr_0.98fr]"
                >
                    <header className="lg:col-span-2">
                        <p className="mb-4 text-xs uppercase tracking-[0.24em] text-current/65">
                            CV / Portfolio / Full Stack
                        </p>
                        <h1 className="max-w-5xl text-[clamp(3.4rem,9vw,8.6rem)] font-black uppercase leading-[0.78] tracking-[-0.095em]">
                            Pedro Santos,<br />Desenvolvedor<br />Full Stack
                        </h1>
                    </header>

                    <div className="space-y-7">
                        <SectionHeader title="Experiência" number="02" />
                        <div className="space-y-8">
                            {experiences.map((experience) => (
                                <article key={experience.role} className="max-w-md">
                                    <p className="mb-2 text-[0.7rem]">{experience.period}</p>
                                    <h2 className="text-xl font-semibold leading-tight tracking-[-0.04em]">
                                        {experience.role}
                                    </h2>
                                    <p className="mt-3 text-sm leading-snug text-current/82">
                                        {experience.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-7">
                        <SectionHeader title="Skills" number="04" />
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                            {skills.map((skill) => (
                                <span key={skill}>{skill}</span>
                            ))}
                        </div>

                        <div className="border-t border-current/35 pt-7">
                            <p className="text-xs uppercase tracking-[0.24em] text-current/55">Resumo</p>
                            <p className="mt-4 max-w-sm text-sm leading-snug text-current/82">
                                Estudante de Sistemas de Informação na UFOP, focado em produtos web, APIs, automações, integrações e sistemas em produção com leitura clara de negócio.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 pt-2 sm:flex-row lg:flex-col xl:flex-row">
                            <a href="#projects" className="cv-button cv-button-primary">
                                Ver projetos
                            </a>
                            <a href="#contact" className="cv-button cv-button-ghost">
                                Contato
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

import { motion } from 'framer-motion';
import BlurImage from './BlurImage';
import StarburstMark from './StarburstMark';

interface SplitProfileCardProps {
    name: string;
    role: string;
    imageUrl: string;
}

const pillars = ['Arquitetura pragmática', 'Produto e UX', 'APIs e dados'];

const SplitProfileCard = ({ name, role, imageUrl }: SplitProfileCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative grid w-full border-y border-[var(--cv-ink)]/30 py-8 md:grid-cols-[0.36fr_0.64fr] md:gap-12 md:py-12"
        >
            <div className="flex flex-col gap-8 border-b border-[var(--cv-ink)]/25 pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-10">
                <div className="flex items-start justify-between gap-6">
                    <StarburstMark className="h-28 w-28 shrink-0 text-[var(--cv-accent)]" />
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--cv-muted)]">Perfil / 06</span>
                </div>

                <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden border border-[var(--cv-ink)]/25 bg-[var(--cv-paper-soft)] grayscale md:max-w-none">
                    <BlurImage
                        src={imageUrl}
                        alt={name}
                        className="h-full w-full object-cover"
                        containerClassName="h-full w-full"
                    />
                    <div className="absolute inset-0 bg-[var(--cv-accent)]/10 mix-blend-multiply" />
                </div>
            </div>

            <div className="pt-8 md:pt-0">
                <p className="cv-kicker">Sobre</p>
                <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.83] tracking-[-0.08em] text-[var(--cv-ink)] md:text-7xl">
                    {name}
                </h2>
                <p className="mt-5 text-lg font-semibold uppercase tracking-[-0.03em] text-[var(--cv-accent)] md:text-2xl">
                    {role}
                </p>

                <div className="mt-8 grid gap-6 text-base leading-snug text-[var(--cv-muted)] md:grid-cols-2">
                    <p>
                        Sou acadêmico de Sistemas de Informação na Universidade Federal de Ouro Preto (UFOP) e desenvolvedor full stack com foco em aplicações web, APIs e produtos com fluxo real de uso.
                    </p>
                    <p>
                        Meus projetos mostram microsserviços em Node/Fastify, APIs Express/NestJS, frontends em React, Vue e Angular, apps Flutter, extensões Chrome, pipelines em Python e ambientes com Docker.
                    </p>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    {pillars.map((item, index) => (
                        <div key={item} className="border-t border-[var(--cv-ink)]/35 pt-3 text-sm">
                            <span className="mb-3 block text-xs text-[var(--cv-accent)]">0{index + 1}</span>
                            {item}
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                    <a href="#projects" className="cv-button cv-button-primary">Ver projetos</a>
                    <a href="https://github.com/PHdaCruzSantos" className="cv-button cv-button-ghost">GitHub</a>
                    <a href="https://www.linkedin.com/in/phdacruzsantos/" className="cv-button cv-button-ghost">LinkedIn</a>
                </div>
            </div>
        </motion.div>
    );
};

export default SplitProfileCard;

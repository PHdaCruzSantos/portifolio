import BlurImage from './BlurImage';
import { projects } from '../../data/projects';
import type { Project } from '../../data/projects';

import iconVue from '../../assets/techicons/Vue.js.png';
import iconReact from '../../assets/techicons/React.png';
import iconPostgres from '../../assets/techicons/PostgresSQL.png';
import iconNode from '../../assets/techicons/JavaScript.png';
import iconTailwind from '../../assets/techicons/Tailwind CSS.png';
import iconTS from '../../assets/techicons/TypeScript.png';
import iconVite from '../../assets/techicons/Vite.js.png';
import iconPython from '../../assets/techicons/Python.png';
import iconRabbit from '../../assets/techicons/RabbitMQ.png';
import iconDocker from '../../assets/techicons/Docker.png';
import iconMUI from '../../assets/techicons/Material UI.png';
import iconAngular from '../../assets/techicons/AngularJS.png';
import iconFlutter from '../../assets/techicons/Flutter.png';
import iconSwagger from '../../assets/techicons/Swagger.png';

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
    if (normalize.includes('material') || normalize.includes('mui')) return iconMUI;
    if (normalize.includes('angular')) return iconAngular;
    if (normalize.includes('flutter') || normalize.includes('react native')) return iconFlutter;
    if (normalize.includes('swagger') || normalize.includes('api')) return iconSwagger;
    if (normalize.includes('manifest')) return iconNode;
    return null;
};

const featuredProjectIds = new Set([7, 8]);

const featuredProjects = projects.filter((project) => featuredProjectIds.has(project.id));
const gridProjects = projects.filter((project) => !featuredProjectIds.has(project.id));

const ProjectShowcase = () => {
    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)]">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                    <span className="inline-flex rounded-full border border-teal-300/25 bg-teal-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-teal-200">
                        Projetos em destaque
                    </span>
                    <h3 className="mt-5 max-w-sm text-2xl font-semibold tracking-tight text-white md:text-3xl">
                        Solucoes que mostram como eu transformo ideia em produto.
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-slate-300 md:text-base">
                        Da extensao que acelera operacao ao app mobile com backend estruturado, cada projeto foi selecionado para mostrar capacidade real de entrega em produto, dados e full stack.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                        <StatCard value="2" label="Extensões de navegador" />
                        <StatCard value="3" label="Produtos full stack e dashboards" />
                        <StatCard value="2" label="Dados e mobile" />
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {featuredProjects.map((project) => (
                        <FeaturedProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {gridProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

const StatCard = ({ value, label }: { value: string; label: string }) => (
    <div className="rounded-2xl border border-white/10 bg-[#0b1018] p-4">
        <p className="text-2xl font-semibold text-white">{value}</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
    </div>
);

const FeaturedProjectCard = ({ project }: { project: Project }) => (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1018]/90 shadow-[0_24px_80px_rgba(0,0,0,0.32)] transition-transform duration-300 hover:-translate-y-1">
        <div className={`relative overflow-hidden bg-gradient-to-br ${project.color} p-5`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_36%),linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:auto,28px_28px,28px_28px]" />
            <div className="relative">
                <ProjectVisual project={project} featured />
            </div>
        </div>

        <div className="p-6">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-400">
                <span>{project.year}</span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span>{project.category}</span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{project.details.overview.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
                {project.details.overview.stack.slice(0, 4).map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
                {project.details.links.github && (
                    <ProjectLink href={project.details.links.github} primary>
                        Ver código
                    </ProjectLink>
                )}
                {project.details.links.live && (
                    <ProjectLink href={project.details.links.live}>
                        {project.details.links.demoConfig?.label || 'Abrir demo'}
                    </ProjectLink>
                )}
            </div>
        </div>
    </article>
);

const ProjectCard = ({ project }: { project: Project }) => (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm">
        <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0b1018]">
            <ProjectVisual project={project} />
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
            <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{project.category}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">{project.title}</h3>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                {project.year}
            </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-300">{project.details.overview.description}</p>

        <div className="mt-5 space-y-3">
            {project.details.highlights.slice(0, 2).map((highlight) => (
                <div key={highlight} className="flex gap-3 text-sm leading-6 text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                    <span>{highlight}</span>
                </div>
            ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
            {project.details.overview.stack.slice(0, 5).map((tech) => (
                <TechBadge key={tech} tech={tech} />
            ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
            {project.details.links.github && (
                <ProjectLink href={project.details.links.github} primary={false}>
                    GitHub
                </ProjectLink>
            )}
            {project.details.links.live && (
                <ProjectLink href={project.details.links.live}>
                    {project.details.links.demoConfig?.label || 'Demo'}
                </ProjectLink>
            )}
        </div>
    </article>
);

const ProjectVisual = ({ project, featured = false }: { project: Project; featured?: boolean }) => {
    if (project.thumbnail === 'visual:data') {
        return <DataVisual />;
    }

    if (project.thumbnail === 'visual:mobile') {
        return <MobileVisual />;
    }

    if (project.imageFit === 'contain') {
        return <ExtensionVisual project={project} featured={featured} />;
    }

    return (
        <div className={`${featured ? 'aspect-[16/11]' : 'aspect-[16/10]'} overflow-hidden`}>
            <BlurImage
                src={project.thumbnail}
                alt={project.title}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                containerClassName="h-full w-full"
            />
        </div>
    );
};

const ExtensionVisual = ({ project, featured = false }: { project: Project; featured?: boolean }) => (
    <div className={`${featured ? 'aspect-[16/11]' : 'aspect-[16/10]'} relative overflow-hidden`}>
        <div className="absolute inset-0">
            <img
                src={project.thumbnail}
                alt=""
                className="h-full w-full scale-110 object-cover"
                style={{ filter: 'blur(26px) brightness(0.3) saturate(1.1)' }}
            />
        </div>
        <div className="relative flex h-full items-center justify-center p-5">
            <div className="flex h-full w-full max-w-[26rem] flex-col overflow-hidden rounded-[1.4rem] border border-white/15 bg-[#06080d]/90 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
                <div className="flex h-11 items-center justify-between border-b border-white/10 bg-white/[0.04] px-4">
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-rose-400/70" />
                        <div className="h-3 w-3 rounded-full bg-amber-300/70" />
                        <div className="h-3 w-3 rounded-full bg-emerald-400/70" />
                    </div>
                    <span className="max-w-[12rem] truncate text-[11px] uppercase tracking-[0.24em] text-slate-400">
                        {project.slug}
                    </span>
                </div>
                <div className="flex-1 overflow-hidden">
                    <BlurImage
                        src={project.thumbnail}
                        alt={project.title}
                        className="h-full w-full object-cover object-top"
                        containerClassName="h-full w-full"
                    />
                </div>
            </div>
        </div>
    </div>
);

const DataVisual = () => (
    <div className="aspect-[16/10] bg-[#071018] p-4">
        <div className="flex h-full gap-4 rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,21,35,0.96),rgba(8,13,22,0.96))] p-4">
            <div className="flex w-[28%] flex-col gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Dataset</p>
                    <p className="mt-3 text-xl font-semibold text-white">842k</p>
                    <p className="mt-1 text-xs text-slate-400">posts analisados</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Features</p>
                    <div className="mt-3 space-y-2">
                        <div className="h-2 rounded-full bg-sky-300/60" />
                        <div className="h-2 w-4/5 rounded-full bg-cyan-200/40" />
                        <div className="h-2 w-3/5 rounded-full bg-white/20" />
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col gap-4">
                <div className="grid flex-1 grid-cols-[1.2fr_0.8fr] gap-4">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                        <div className="flex h-full items-end gap-2">
                            <div className="h-[38%] w-full rounded-t-lg bg-cyan-300/40" />
                            <div className="h-[70%] w-full rounded-t-lg bg-sky-300/60" />
                            <div className="h-[52%] w-full rounded-t-lg bg-teal-300/50" />
                            <div className="h-[86%] w-full rounded-t-lg bg-white/35" />
                            <div className="h-[60%] w-full rounded-t-lg bg-cyan-100/45" />
                        </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                        <div className="relative mx-auto mt-2 h-28 w-28 rounded-full border-[10px] border-sky-300/50 border-t-white/20 border-r-teal-300/70" />
                        <div className="mt-4 space-y-2">
                            <div className="h-2 rounded-full bg-white/20" />
                            <div className="h-2 w-2/3 rounded-full bg-sky-300/50" />
                        </div>
                    </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="grid grid-cols-5 gap-2">
                        {Array.from({ length: 20 }).map((_, index) => (
                            <div
                                key={index}
                                className="aspect-square rounded-lg"
                                style={{
                                    background: index % 4 === 0
                                        ? 'rgba(45, 212, 191, 0.5)'
                                        : index % 3 === 0
                                            ? 'rgba(125, 211, 252, 0.38)'
                                            : 'rgba(255,255,255,0.08)',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const MobileVisual = () => (
    <div className="aspect-[16/10] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.24),transparent_38%),#071018] p-4">
        <div className="flex h-full items-center justify-center gap-4 rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,21,35,0.95),rgba(8,13,22,0.95))] px-4">
            <div className="hidden h-[78%] w-28 rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-2 md:block">
                <div className="h-full rounded-[1.2rem] border border-white/10 bg-black/30 p-3">
                    <div className="h-4 w-16 rounded-full bg-white/15" />
                    <div className="mt-5 space-y-3">
                        <div className="h-14 rounded-2xl bg-teal-300/20" />
                        <div className="h-10 rounded-2xl bg-white/10" />
                        <div className="h-10 rounded-2xl bg-white/10" />
                    </div>
                </div>
            </div>
            <div className="h-[88%] w-44 rounded-[2rem] border border-cyan-200/20 bg-black/50 p-2 shadow-[0_16px_40px_rgba(8,145,178,0.22)]">
                <div className="flex h-full flex-col rounded-[1.6rem] border border-white/10 bg-[#09111b] p-3">
                    <div className="mx-auto h-1.5 w-16 rounded-full bg-white/10" />
                    <div className="mt-4 rounded-[1.4rem] border border-cyan-200/15 bg-cyan-300/10 p-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-100/60">SECOMP</p>
                                <p className="mt-1 text-sm font-semibold text-white">Check-in e agenda</p>
                            </div>
                            <div className="h-8 w-8 rounded-full bg-cyan-300/20" />
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl bg-white/[0.05] p-3">
                            <div className="h-12 rounded-xl bg-white/10" />
                            <div className="mt-3 h-2 w-3/4 rounded-full bg-white/20" />
                        </div>
                        <div className="rounded-2xl bg-white/[0.05] p-3">
                            <div className="h-12 rounded-xl bg-cyan-300/20" />
                            <div className="mt-3 h-2 w-2/3 rounded-full bg-white/20" />
                        </div>
                    </div>
                    <div className="mt-4 flex-1 rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-3">
                        <div className="space-y-3">
                            <div className="h-10 rounded-2xl bg-white/10" />
                            <div className="h-10 rounded-2xl bg-white/10" />
                            <div className="h-10 rounded-2xl bg-cyan-300/18" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden h-[70%] w-24 rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-2 lg:block">
                <div className="h-full rounded-[1.1rem] border border-white/10 bg-black/30 p-3">
                    <div className="h-8 rounded-xl bg-white/10" />
                    <div className="mt-3 h-20 rounded-2xl bg-cyan-300/15" />
                    <div className="mt-3 h-10 rounded-xl bg-white/10" />
                </div>
            </div>
        </div>
    </div>
);

const TechBadge = ({ tech }: { tech: string }) => {
    const icon = getTechIcon(tech);

    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200">
            {icon ? (
                <BlurImage
                    src={icon}
                    alt={tech}
                    className="h-4 w-4 object-contain"
                    containerClassName="h-4 w-4"
                />
            ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            )}
            <span>{tech}</span>
        </span>
    );
};

const ProjectLink = ({
    children,
    href,
    primary = false,
}: {
    children: React.ReactNode;
    href: string;
    primary?: boolean;
}) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={primary
            ? 'inline-flex items-center justify-center rounded-full bg-teal-300 px-4 py-2 text-sm font-semibold text-[#071311] transition-colors hover:bg-teal-200'
            : 'inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]'}
    >
        {children}
    </a>
);

export default ProjectShowcase;

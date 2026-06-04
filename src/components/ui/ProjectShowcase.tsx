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
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10">
            <div className="grid gap-5 border-y border-[var(--cv-line)] py-6 lg:grid-cols-[0.8fr_1.2fr]">
                <aside className="flex flex-col justify-between gap-8 border-b border-[var(--cv-line)] pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                    <div>
                        <div className="cv-meta-row">
                            <span>Projetos em destaque</span>
                            <span className="ml-auto">08</span>
                        </div>
                        <h3 className="mt-5 max-w-md text-3xl font-black uppercase leading-[0.86] tracking-[-0.07em] text-[var(--cv-accent)] md:text-5xl">
                            Soluções com cara de produto.
                        </h3>
                        <p className="mt-5 max-w-md text-sm leading-snug text-[var(--cv-muted)] md:text-base">
                            Da extensão que acelera operação ao app mobile com backend estruturado, cada projeto mostra entrega real em produto, dados e full stack.
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                        <StatCard value="2" label="Extensões de navegador" />
                        <StatCard value="3" label="Produtos full stack e dashboards" />
                        <StatCard value="2" label="Dados e mobile" />
                    </div>
                </aside>

                <div className="grid gap-5 md:grid-cols-2">
                    {featuredProjects.map((project, index) => (
                        <FeaturedProjectCard key={project.id} project={project} index={index + 1} />
                    ))}
                </div>
            </div>

            <div className="grid gap-px overflow-hidden border border-[var(--cv-line)] bg-[var(--cv-line)] md:grid-cols-2 xl:grid-cols-3">
                {gridProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index + featuredProjects.length + 1} />
                ))}
            </div>
        </div>
    );
};

const StatCard = ({ value, label }: { value: string; label: string }) => (
    <div className="border border-[var(--cv-line)] bg-[var(--cv-surface)] p-4">
        <p className="text-3xl font-black leading-none tracking-[-0.06em] text-[var(--cv-accent)]">{value}</p>
        <p className="mt-3 text-xs uppercase leading-snug text-[var(--cv-muted)]">{label}</p>
    </div>
);

const FeaturedProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <article className="group flex min-h-full flex-col border border-[var(--cv-line)] bg-[var(--cv-surface)] transition-transform duration-300 hover:-translate-y-1">
        <ProjectVisual project={project} featured />

        <div className="flex flex-1 flex-col p-5">
            <div className="cv-meta-row">
                <span>{String(index).padStart(2, '0')}</span>
                <span>{project.year}</span>
                <span className="ml-auto">{project.category}</span>
            </div>

            <h3 className="mt-5 text-3xl font-black uppercase leading-[0.88] tracking-[-0.07em] text-[var(--cv-ink)]">
                {project.title}
            </h3>
            <p className="mt-4 text-sm leading-snug text-[var(--cv-muted)]">{project.details.overview.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
                {project.details.overview.stack.slice(0, 4).map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                ))}
            </div>

            <ProjectActions project={project} primaryLabel="Ver código" secondaryLabel={project.details.links.demoConfig?.label || 'Abrir demo'} />
        </div>
    </article>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <article className="group flex h-full flex-col bg-[var(--cv-paper)] p-5">
        <ProjectVisual project={project} />

        <div className="mt-5 cv-meta-row">
            <span>{String(index).padStart(2, '0')}</span>
            <span>{project.year}</span>
            <span className="ml-auto">{project.category}</span>
        </div>

        <h3 className="mt-5 text-2xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-[var(--cv-ink)]">
            {project.title}
        </h3>

        <p className="mt-4 text-sm leading-snug text-[var(--cv-muted)]">{project.details.overview.description}</p>

        <div className="mt-5 space-y-3 border-t border-[var(--cv-line)] pt-4">
            {project.details.highlights.slice(0, 2).map((highlight) => (
                <div key={highlight} className="grid grid-cols-[1.2rem_1fr] gap-3 text-sm leading-snug text-[var(--cv-muted)]">
                    <span className="mt-1.5 h-px w-full bg-[var(--cv-accent)]" />
                    <span>{highlight}</span>
                </div>
            ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
            {project.details.overview.stack.slice(0, 5).map((tech) => (
                <TechBadge key={tech} tech={tech} />
            ))}
        </div>

        <ProjectActions project={project} primaryLabel="GitHub" secondaryLabel={project.details.links.demoConfig?.label || 'Demo'} />
    </article>
);

const ProjectVisual = ({ project, featured = false }: { project: Project; featured?: boolean }) => {
    if (project.thumbnail === 'visual:data') {
        return <DataVisual featured={featured} />;
    }

    if (project.thumbnail === 'visual:mobile') {
        return <MobileVisual featured={featured} />;
    }

    if (project.imageFit === 'contain') {
        return <ExtensionVisual project={project} featured={featured} />;
    }

    return (
        <div className={`${featured ? 'aspect-[16/11]' : 'aspect-[16/10]'} overflow-hidden border border-[var(--cv-line)] bg-[var(--cv-paper-soft)]`}>
            <BlurImage
                src={project.thumbnail}
                alt={project.title}
                className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                containerClassName="h-full w-full"
            />
        </div>
    );
};

const ExtensionVisual = ({ project, featured = false }: { project: Project; featured?: boolean }) => (
    <div className={`${featured ? 'aspect-[16/11]' : 'aspect-[16/10]'} relative overflow-hidden border border-[var(--cv-line)] bg-[var(--cv-paper-soft)] p-4`}>
        <div className="absolute inset-0 opacity-50 cv-grid" />
        <div className="relative flex h-full items-center justify-center">
            <div className="flex h-full w-full max-w-[26rem] flex-col overflow-hidden border border-[var(--cv-line)] bg-[var(--cv-paper)] shadow-[0_18px_50px_var(--cv-shadow)]">
                <div className="flex h-10 items-center justify-between border-b border-[var(--cv-line)] px-4">
                    <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 border border-[var(--cv-ink)]" />
                        <div className="h-2.5 w-2.5 border border-[var(--cv-accent)] bg-[var(--cv-accent)]" />
                        <div className="h-2.5 w-2.5 border border-[var(--cv-ink)]" />
                    </div>
                    <span className="max-w-[12rem] truncate text-[10px] uppercase text-[var(--cv-muted)]">
                        {project.slug}
                    </span>
                </div>
                <div className="flex-1 overflow-hidden">
                    <BlurImage
                        src={project.thumbnail}
                        alt={project.title}
                        className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                        containerClassName="h-full w-full"
                    />
                </div>
            </div>
        </div>
    </div>
);

const DataVisual = ({ featured = false }: { featured?: boolean }) => (
    <div className={`${featured ? 'aspect-[16/11]' : 'aspect-[16/10]'} border border-[var(--cv-line)] bg-[var(--cv-paper-soft)] p-4`}>
        <div className="grid h-full grid-cols-[0.8fr_1.2fr] gap-4 border border-[var(--cv-line)] bg-[var(--cv-paper)] p-4">
            <div className="flex flex-col justify-between border-r border-[var(--cv-line)] pr-4">
                <div>
                    <p className="text-[10px] uppercase text-[var(--cv-muted)]">Dataset</p>
                    <p className="mt-2 text-4xl font-black tracking-[-0.06em] text-[var(--cv-accent)]">842k</p>
                    <p className="mt-1 text-xs text-[var(--cv-muted)]">posts analisados</p>
                </div>
                <div className="space-y-2">
                    <div className="h-1.5 bg-[var(--cv-accent)]" />
                    <div className="h-1.5 w-4/5 bg-[var(--cv-ink)]/45" />
                    <div className="h-1.5 w-3/5 bg-[var(--cv-line)]" />
                </div>
            </div>
            <div className="grid grid-rows-[1fr_auto] gap-4">
                <div className="flex items-end gap-2 border-b border-[var(--cv-line)] pb-4">
                    {[38, 70, 52, 86, 60].map((height, index) => (
                        <div
                            key={height}
                            className="w-full border border-[var(--cv-ink)] bg-[var(--cv-accent)]/20"
                            style={{ height: `${height}%`, opacity: index % 2 ? 0.82 : 0.48 }}
                        />
                    ))}
                </div>
                <div className="grid grid-cols-5 gap-2">
                    {Array.from({ length: 15 }).map((_, index) => (
                        <div
                            key={index}
                            className="aspect-square border border-[var(--cv-line)]"
                            style={{ background: index % 3 === 0 ? 'var(--cv-accent)' : 'transparent', opacity: index % 3 === 0 ? 0.6 : 1 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const MobileVisual = ({ featured = false }: { featured?: boolean }) => (
    <div className={`${featured ? 'aspect-[16/11]' : 'aspect-[16/10]'} overflow-hidden border border-[var(--cv-line)] bg-[var(--cv-paper-soft)] p-4`}>
        <div className="flex h-full items-center justify-center gap-4 border border-[var(--cv-line)] bg-[var(--cv-paper)] px-4">
            <div className="hidden h-[76%] w-24 border border-[var(--cv-line)] p-2 md:block">
                <div className="h-full border border-[var(--cv-line-soft)] p-3">
                    <div className="h-4 w-14 bg-[var(--cv-line)]" />
                    <div className="mt-5 space-y-3">
                        <div className="h-12 border border-[var(--cv-line)] bg-[var(--cv-accent)]/12" />
                        <div className="h-9 border border-[var(--cv-line)]" />
                        <div className="h-9 border border-[var(--cv-line)]" />
                    </div>
                </div>
            </div>
            <div className="h-[88%] w-44 border border-[var(--cv-ink)] bg-[var(--cv-paper-soft)] p-2 shadow-[0_16px_40px_var(--cv-shadow)]">
                <div className="flex h-full flex-col border border-[var(--cv-line)] bg-[var(--cv-paper)] p-3">
                    <div className="mx-auto h-1.5 w-16 bg-[var(--cv-line)]" />
                    <div className="mt-4 border border-[var(--cv-line)] bg-[var(--cv-accent)]/10 p-3">
                        <p className="text-[10px] uppercase text-[var(--cv-muted)]">SECOMP</p>
                        <p className="mt-1 text-sm font-bold leading-tight text-[var(--cv-ink)]">Check-in e agenda</p>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="border border-[var(--cv-line)] p-3">
                            <div className="h-10 bg-[var(--cv-line-soft)]" />
                            <div className="mt-3 h-1.5 w-3/4 bg-[var(--cv-line)]" />
                        </div>
                        <div className="border border-[var(--cv-line)] p-3">
                            <div className="h-10 bg-[var(--cv-accent)]/20" />
                            <div className="mt-3 h-1.5 w-2/3 bg-[var(--cv-line)]" />
                        </div>
                    </div>
                    <div className="mt-4 flex-1 border border-[var(--cv-line)] p-3">
                        <div className="space-y-3">
                            <div className="h-8 border border-[var(--cv-line)]" />
                            <div className="h-8 border border-[var(--cv-line)]" />
                            <div className="h-8 border border-[var(--cv-accent)] bg-[var(--cv-accent)]/12" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const TechBadge = ({ tech }: { tech: string }) => {
    const icon = getTechIcon(tech);

    return (
        <span className="inline-flex items-center gap-2 border border-[var(--cv-line)] bg-[var(--cv-surface)] px-2.5 py-1.5 text-xs text-[var(--cv-ink)]">
            {icon ? (
                <BlurImage
                    src={icon}
                    alt={tech}
                    className="h-4 w-4 object-contain grayscale"
                    containerClassName="h-4 w-4"
                />
            ) : (
                <span className="h-1.5 w-1.5 bg-[var(--cv-accent)]" />
            )}
            <span>{tech}</span>
        </span>
    );
};

const ProjectActions = ({
    project,
    primaryLabel,
    secondaryLabel,
}: {
    project: Project;
    primaryLabel: string;
    secondaryLabel: string;
}) => (
    <div className="mt-auto flex flex-wrap gap-3 pt-6">
        {project.details.links.github && (
            <ProjectLink href={project.details.links.github} primary>
                {primaryLabel}
            </ProjectLink>
        )}
        {project.details.links.live && (
            <ProjectLink href={project.details.links.live}>
                {secondaryLabel}
            </ProjectLink>
        )}
    </div>
);

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
        className={primary ? 'cv-button cv-button-primary' : 'cv-button cv-button-ghost'}
    >
        {children}
    </a>
);

export default ProjectShowcase;

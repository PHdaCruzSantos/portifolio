import type { Project } from './types';

export const sarfatyNexdash: Project = {
    id: 5,
    title: "Sarfaty NexDash",
    slug: "sarfaty-nexdash",
    category: "Front-End • Dashboard",
    year: "2025",
    thumbnail: "https://raw.githubusercontent.com/PHdaCruzSantos/sarfatyNextDash/master/image.png",
    color: "from-blue-400/20 to-slate-700/40",
    
    details: {
        overview: {
            description: "Dashboard industrial para monitoramento e análise de máquinas. A entrega combina mapas, KPIs, gráficos, filtros, internacionalização e exportação de relatórios.",
            stack: ["React", "TypeScript", "Material UI", "Tailwind CSS", "Redux", "MapLibre"],
            status: "Concluído",
            duration: "Desafio Técnico"
        },
        highlights: [
            "Monitoramento com KPIs dinâmicos e filtros.",
            "Mapas interativos com MapLibre GL.",
            "Internacionalização e dark mode.",
            "Exportação de relatórios em CSV e PDF.",
            "Gestão de estado global com Redux Toolkit."
        ],
        links: {
            github: "https://github.com/PHdaCruzSantos/sarfatyNextDash",
            live: null,
            case: null
        }
    }
};

import type { Project } from './types';

export const sarfatyNexdash: Project = {
    id: 2,
    title: "Sarfaty NexDash",
    slug: "sarfaty-nexdash",
    category: "Front-End • Dashboard",
    year: "2025",
    thumbnail: "https://raw.githubusercontent.com/PHdaCruzSantos/sarfatyNextDash/master/image.png",
    color: "from-blue-600 to-indigo-700",
    
    details: {
        overview: {
            description: "Dashboard industrial completo para monitoramento e análise de máquinas. Solução focada em performance e experiência do usuário, integrando mapas interativos, gráficos em tempo real e internacionalização.",
            stack: ["React", "TypeScript", "Material UI", "Tailwind CSS", "Redux", "MapLibre"],
            status: "Concluído",
            duration: "Desafio Técnico"
        },
        highlights: [
            "Monitoramento com KPIs dinâmicos e filtros",
            "Mapas interativos com MapLibre GL",
            "Internacionalização (i18n) e Dark Mode",
            "Exportação de relatórios em CSV e PDF",
            "Gestão de estado global com Redux Toolkit"
        ],
        links: {
            github: "https://github.com/PHdaCruzSantos/sarfatyNextDash",
            live: null,
            case: null
        }
    }
};

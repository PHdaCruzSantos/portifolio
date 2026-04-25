import type { Project } from './types';

export const plantalize: Project = {
    id: 2,
    title: "Plantalize",
    slug: "plantalize",
    category: "Full Stack • Social App",
    year: "2025",
    thumbnail: "visual:product",
    color: "from-emerald-400/20 to-slate-700/40",
    details: {
        overview: {
            description: "Rede social para amantes de plantas com backend em Node/Express, Prisma, PostgreSQL, frontend React, dashboard administrativo e app mobile Expo. O foco é produto completo, autenticação e ambiente replicável com Docker.",
            stack: ["React", "React Native", "Node.js", "Prisma", "PostgreSQL", "Docker"],
            status: "Em desenvolvimento",
            duration: "Projeto autoral"
        },
        highlights: [
            "Backend TypeScript com Prisma e PostgreSQL.",
            "Frontend web, dashboard administrativo e app mobile Expo.",
            "Ambiente de desenvolvimento e produção com Docker Compose.",
            "Base preparada para autenticação, mídia e rotinas administrativas."
        ],
        links: {
            github: "https://github.com/PHdaCruzSantos/plantalize",
            live: null,
            case: null
        }
    }
};

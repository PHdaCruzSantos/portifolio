import type { Project } from './types';

export const catServicos: Project = {
    id: 6,
    title: "Catálogo de Serviços",
    slug: "catalogo-servicos",
    category: "Full Stack • Marketplace",
    year: "2025",
    thumbnail: "https://raw.githubusercontent.com/PHdaCruzSantos/Trabalho-pratico-Web-1/master/previewTPWeb.png",
    color: "from-rose-400/20 to-slate-700/40",
    
    details: {
        overview: {
            description: "Marketplace two-sided para conectar contratantes e profissionais autônomos. Inclui autenticação por perfil, busca, reputação, solicitações de serviço e curadoria de portfólio.",
            stack: ["Angular", "TypeScript", "Node.js", "Prisma", "SQLite"],
            status: "Protótipo",
            duration: "Trabalho Acadêmico"
        },
        highlights: [
            "Arquitetura two-sided marketplace.",
            "Sistema de avaliações e reputação.",
            "Busca avançada com filtros dinâmicos.",
            "Gestão de portfólio para trabalhadores.",
            "Autenticação JWT com perfis distintos."
        ],
        links: {
            github: "https://github.com/PHdaCruzSantos/Trabalho-pratico-Web-1",
            live: null,
            case: null
        }
    }
};

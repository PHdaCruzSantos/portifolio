import type { Project } from './types';

export const catServicos: Project = {
    id: 3,
    title: "Catálogo de Serviços",
    slug: "catalogo-servicos",
    category: "Full Stack • Marketplace",
    year: "2025",
    thumbnail: "https://raw.githubusercontent.com/PHdaCruzSantos/Trabalho-pratico-Web-1/master/previewTPWeb.png",
    color: "from-red-500 to-orange-500",
    
    details: {
        overview: {
            description: "Plataforma web two-sided marketplace para conectar prestadores de serviços locais a contratantes. Sistema completo com perfis detalhados, portffólio, avaliações e busca avançada.",
            stack: ["Angular", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
            status: "Protótipo",
            duration: "Trabalho Acadêmico"
        },
        highlights: [
            "Arquitetura Two-Sided Marketplace (Contratante/Trabalhador)",
            "Sistema de avaliações e reputação",
            "Busca avançada com filtros dinâmicos",
            "Gestão de portfólio para trabalhadores",
            "Autenticação JWT com perfis distintos"
        ],
        links: {
            github: "https://github.com/PHdaCruzSantos/Trabalho-pratico-Web-1",
            live: null,
            case: null
        }
    }
};

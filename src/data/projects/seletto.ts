import type { Project } from './types';

export const seletto: Project = {
    id: 1,
    title: "Seletto Marketplace",
    slug: "seletto-marketplace",
    category: "Full Stack • Microsserviços",
    year: "2025",
    thumbnail: "visual:microservices",
    color: "from-teal-400/20 to-slate-700/40",
    details: {
        overview: {
            description: "Marketplace em monorepo com API Gateway, serviços de autenticação, catálogo e vendas, além de duas interfaces Vue para compradores e vendedores. O projeto demonstra separação de domínios, contratos compartilhados e execução containerizada.",
            stack: ["Vue 3", "TypeScript", "Fastify", "Prisma", "Docker", "Pinia"],
            status: "Em desenvolvimento",
            duration: "Projeto autoral"
        },
        highlights: [
            "Arquitetura em microsserviços com API Gateway.",
            "Monorepo com workspaces e biblioteca compartilhada.",
            "Serviços independentes para autenticação, catálogo e vendas.",
            "Web Buyer e Web Seller com Vue 3, Pinia e PrimeVue."
        ],
        links: {
            github: "https://github.com/PHdaCruzSantos/seletto",
            live: null,
            case: null
        }
    }
};

import type { Project } from './types';

export const secomp: Project = {
    id: 3,
    title: "SECOMP App",
    slug: "secomp-app",
    category: "Mobile • Evento",
    year: "2026",
    thumbnail: "visual:mobile",
    color: "from-cyan-400/20 to-slate-700/40",
    details: {
        overview: {
            description: "Aplicativo para evento academico pensado para centralizar comunicacao, acesso e operacao em um unico produto. A entrega combina app Flutter com backend em Node.js, autenticacao por perfis e estrutura pronta para escalar a gestao de participantes, palestrantes e administracao.",
            stack: ["Flutter", "Node.js", "Express", "Prisma", "PostgreSQL", "Docker"],
            status: "Em desenvolvimento",
            duration: "Projeto academico"
        },
        highlights: [
            "Backend com autenticacao e regras por perfil para diferentes tipos de usuario.",
            "Infraestrutura com PostgreSQL, Prisma e Docker para facilitar implantacao e manutencao.",
            "Base de dados inicial para validar fluxos e acelerar homologacao.",
            "Aplicativo Flutter preparado para testes em emulador e dispositivos Android."
        ],
        links: {
            github: "https://github.com/PHdaCruzSantos/SECOMP-app",
            live: null,
            case: null
        }
    }
};

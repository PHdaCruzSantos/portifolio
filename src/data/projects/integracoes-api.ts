import type { Project } from './types';

export const integracoesApi: Project = {
    id: 10,
    title: "Integrações API",
    slug: "integracoes-api",
    category: "Backend • Integrações",
    year: "2026",
    thumbnail: "visual:api",
    color: "from-indigo-400/20 to-slate-700/40",
    details: {
        overview: {
            description: "API Node.js focada em integrações, observabilidade básica e comunicação com serviços externos. Usa Express, PostgreSQL, Helmet, CORS, Nodemailer e logging estruturado com Pino.",
            stack: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Pino", "Helmet"],
            status: "Em desenvolvimento",
            duration: "Backend aplicado"
        },
        highlights: [
            "Estrutura TypeScript para API com Express.",
            "Segurança HTTP com Helmet e política CORS.",
            "Persistência em PostgreSQL.",
            "Logging estruturado com Pino e pino-http."
        ],
        links: {
            github: "https://github.com/PHdaCruzSantos/integracoes-api",
            live: null,
            case: null
        }
    }
};

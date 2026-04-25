import type { Project } from './types';

export const buscadorExtensao: Project = {
    id: 8,
    title: "MP Buscador",
    slug: "buscador-extensao",
    category: "Chrome Extension",
    year: "2026",
    thumbnail: "https://raw.githubusercontent.com/PHdaCruzSantos/buscador-extensao/master/image.png",
    imageFit: 'contain',
    color: "from-violet-400/20 to-slate-700/40",
    details: {
        overview: {
            description: "Uma extensão robusta para otimizar o fluxo de busca de preços em diferentes marketplaces diretamente pelo Side Panel do navegador. Opera em background, consolidando relatórios gerados via scrap local e permitindo a exportação para PDF.",
            stack: ["React 19", "Material UI", "TypeScript", "Manifest V3", "jsPDF"],
            status: "Concluído",
            duration: "Recente"
        },
        highlights: [
            "Baseado na arquitetura orientada a eventos do Manifest V3.",
            "UI escalável construída com Material UI (MUI).",
            "Geração de relatórios PDF totalmente no cliente com jsPDF.",
            "Armazenamento de dados e configurações com chrome.storage.sync."
        ],
        links: {
            github: "https://github.com/PHdaCruzSantos/buscador-extensao",
            live: null,
            case: null
        }
    }
};

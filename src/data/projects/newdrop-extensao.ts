import type { Project } from './types';

export const newDropExtensao: Project = {
    id: 4, // Next sequential ID, although ProjectShowcase will be updated to not heavily rely on it
    title: "NewDrop Extensão",
    slug: "newdrop-extensao",
    category: "Chrome Extension",
    year: "2026",
    thumbnail: "https://raw.githubusercontent.com/PHdaCruzSantos/newDrop-extensao/master/image.png",
    imageFit: 'contain',
    color: "from-blue-600/20 to-cyan-500/20",
    details: {
        overview: {
            description: "Extensão de navegador (Chrome/Edge) para acompanhar os últimos lançamentos (drops) de tênis utilizando o Side Panel. Desenvolvida com a arquitetura Manifest V3, empregando web scraping sob demanda e Service Workers para sincronização em tempo real.",
            stack: ["React 19", "TypeScript", "Vite", "Manifest V3"],
            status: "Concluído",
            duration: "Recente"
        },
        highlights: [
            "Construído com base no Manifest V3.",
            "Uso da API do chrome.sidePanel e chrome.storage.local.",
            "Scraping dinâmico sob demanda na aba do usuário.",
            "Estado persistente e integração limpa do React."
        ],
        links: {
            github: "https://github.com/PHdaCruzSantos/newDrop-extensao",
            live: null,
            case: null
        }
    }
};

import type { Project } from './types';

export const amsPoliticos: Project = {
    id: 9,
    title: "AMS Políticos",
    slug: "ams-politicos",
    category: "Data Science • Grafos",
    year: "2025",
    thumbnail: "visual:data",
    color: "from-sky-400/20 to-slate-700/40",
    details: {
        overview: {
            description: "Projeto de analise de dados politicos com Python para transformar grandes volumes de informacao em leitura estrategica. Estruturei o fluxo de ponta a ponta, da coleta e tratamento aos modelos e visualizacoes, criando uma base pronta para investigacao, monitoramento e tomada de decisao.",
            stack: ["Python", "Pandas", "NetworkX", "Scikit-Learn", "Matplotlib"],
            status: "Pesquisa aplicada",
            duration: "Projeto autoral"
        },
        highlights: [
            "Pipeline organizado para coleta, limpeza, analise e visualizacao de dados.",
            "Modelagem de relacoes com grafos e metricas de centralidade.",
            "Experimentos com clusterizacao, reducao de dimensionalidade e modelos supervisionados.",
            "Visualizacoes exploratorias para identificar padroes e apoiar analise estrategica."
        ],
        links: {
            github: "https://github.com/PHdaCruzSantos/ams-politicos",
            live: null,
            case: null
        }
    }
};

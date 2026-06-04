import type { Project } from './types';

export const gdash: Project = {
    id: 4,
    title: "GDASH Weather Monitor",
    slug: "gdash-weather-monitor",
    category: "Full Stack • Microsserviços",
    year: "2025",
    thumbnail: "https://github.com/PHdaCruzSantos/desafio-gdash-2025-02/blob/pedro-henrique-da-cruz-santos/preview.png?raw=true",
    color: "from-sky-400/20 to-slate-700/40",
    
    details: {
        overview: {
            description: "Sistema distribuído de monitoramento climático com ingestão em Python, processamento em Go, API NestJS e insights com Gemini. Bom exemplo de integração entre serviços, mensageria e dashboard.",
            stack: ["NestJS", "React", "Go", "Python", "RabbitMQ", "Docker", "Gemini AI"],
            status: "Concluído",
            duration: "Desafio Técnico"
        },
        highlights: [
            "Arquitetura orientada a eventos com RabbitMQ.",
            "Pipeline poliglota com Python, Go e Node.js.",
            "Integração com IA generativa para insights climáticos.",
            "Dashboard interativo com gráficos e indicadores.",
            "Infraestrutura containerizada com Docker."
        ],
        links: {
            github: "https://github.com/PHdaCruzSantos/desafio-gdash-2025-02/tree/pedro-henrique-da-cruz-santos",
            live: "https://youtu.be/Sm0yyEqfzwA",
            case: null,
            demoConfig: {
                label: "Vídeo Demonstração",
                type: "video"
            }
        }
    }
};

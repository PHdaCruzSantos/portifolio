import type { Project } from './types';

export const gdash: Project = {
    id: 1,
    title: "GDASH Weather Monitor",
    slug: "gdash-weather-monitor",
    category: "Full Stack • Microsserviços",
    year: "2025",
    thumbnail: "https://github.com/PHdaCruzSantos/desafio-gdash-2025-02/blob/pedro-henrique-da-cruz-santos/preview.png?raw=true",
    color: "from-sky-500 to-indigo-600",
    
    details: {
        overview: {
            description: "Sistema distribuído de monitoramento climático utilizando arquitetura de microsserviços. O projeto integra ingestão de dados em Python, processamento de alta performance em Go e API robusta em NestJS, com insights gerados por IA Generativa (Gemini).",
            stack: ["NestJS", "React", "Go", "Python", "RabbitMQ", "Docker", "Gemini AI"],
            status: "Concluído",
            duration: "Desafio Técnico"
        },
        highlights: [
            "Arquitetura orientada a eventos com RabbitMQ",
            "Pipeline poliglota (Python, Go, Node.js)",
            "Integração com IA (Google Gemini) para insights",
            "Dashboard interativo com gráficos em tempo real",
            "Infraestrutura containerizada com Docker"
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

export interface ProjectLinks {
    github: string | null;
    live: string | null;
    case: string | null;
    demoConfig?: {
        label: string;
        type: 'video' | 'live' | 'app';
    };
}

export interface ProjectOverview {
    description: string;
    stack: string[];
    status: string;
    duration: string;
}

export interface ProjectDetails {
    overview: ProjectOverview;
    highlights: string[];
    links: ProjectLinks;
}

export interface Project {
    id: number;
    title: string;
    slug: string;
    category: string;
    year: string;
    thumbnail: string;
    color: string;
    details: ProjectDetails;
}

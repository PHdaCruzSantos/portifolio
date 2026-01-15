import { gdash } from './gdash';
import { sarfatyNexdash } from './sarfaty-nexdash';
import { catServicos } from './cat-servicos';
import type { Project } from './types';

export const projects: Project[] = [
    gdash,
    sarfatyNexdash,
    catServicos
];

export * from './types';

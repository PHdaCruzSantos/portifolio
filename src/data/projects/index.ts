import { gdash } from './gdash';
import { sarfatyNexdash } from './sarfaty-nexdash';
import { catServicos } from './cat-servicos';
import { newDropExtensao } from './newdrop-extensao';
import { buscadorExtensao } from './buscador-extensao';
import type { Project } from './types';

export const projects: Project[] = [
    gdash,
    sarfatyNexdash,
    catServicos,
    newDropExtensao,
    buscadorExtensao
];

export * from './types';

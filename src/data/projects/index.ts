import { gdash } from './gdash';
import { secomp } from './secomp';
import { sarfatyNexdash } from './sarfaty-nexdash';
import { catServicos } from './cat-servicos';
import { newDropExtensao } from './newdrop-extensao';
import { buscadorExtensao } from './buscador-extensao';
import { amsPoliticos } from './ams-politicos';
import type { Project } from './types';

export const projects: Project[] = [
    newDropExtensao,
    buscadorExtensao,
    gdash,
    sarfatyNexdash,
    amsPoliticos,
    secomp,
    catServicos
];

export * from './types';

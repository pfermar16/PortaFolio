import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Technologies } from './components/technologies/technologies';

export const routes: Routes = [
    { path: '', component: Hero },
    { path: 'projects', component: Projects },
    { path: 'technologies', component: Technologies },
];

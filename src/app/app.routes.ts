import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/landing/landing.component').then(c => c.LandingComponent)
    },
    {
        path: 'me',
        loadComponent: () => import('./pages/portfolio/portfolio.component').then(c => c.PortfolioComponent),
        children: []
    }
];

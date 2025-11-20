import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/landing/landing.component').then(c => c.LandingComponent)
    },
    {
        path: 'me',
        loadComponent: () => import('./pages/portfolio/portfolio.component').then(c => c.PortfolioComponent),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'about'
            },
            {
                path: 'about',
                loadComponent: () => import('./pages/portfolio/summary/summary.component').then(c => c.SummaryComponent)
            },
            {
                path: 'projects',
                loadComponent: () => import('./pages/portfolio/projects/projects.component').then(c => c.ProjectsComponent)
            },
            {
                path: 'experience',
                loadComponent: () => import('./pages/portfolio/experience/experience.component').then(c => c.ExperienceComponent)
            },
            {
                path: 'education',
                loadComponent: () => import('./pages/portfolio/education/education.component').then(c => c.EducationComponent)
            },
            {
                path: 'certifications',
                loadComponent: () => import('./pages/portfolio/certifications/certifications.component').then(c => c.CertificationsComponent)
            }
            // {
            //     path: 'contact',
            //     loadComponent: () => import('./pages/portfolio/summary/summary.component').then(c => c.SummaryComponent)
            // }
        ]
    },
    // 404 Handler
    {
        path: '**',
        loadComponent: () => import('./core/components/views/not-found/not-found.component').then(c => c.NotFoundComponent),
    }
];

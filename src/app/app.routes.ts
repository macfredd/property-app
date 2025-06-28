import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'search',
        loadComponent: () => import('./pages/search-results/search-results').then(m => m.SearchResults)
    },
    {
        path: 'property/new',
        loadComponent: () => import('./pages/add-edit-property/add-edit-property').then(m => m.AddEditProperty)
    },
    {
        path: 'property/:id/edit',
        loadComponent: () => import('./pages/add-edit-property/add-edit-property').then(m => m.AddEditProperty)
    },
    {
        path: 'property/:id',
        loadComponent: () => import('./pages/property-detail/property-detail').then(m => m.PropertyDetail)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound)
    }
];

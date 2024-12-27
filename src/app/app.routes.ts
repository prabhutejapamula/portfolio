import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "navigationMenu",
        loadComponent: () =>
            import('./navigation-menu/navigation-menu.component').then((c) => c.NavigationMenuComponent),
        title: 'Navigation Menu'
    }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Amrut Patil — Full Stack Developer & Angular Specialist',
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./features/blog/blog-list/blog-list.component').then((m) => m.BlogListComponent),
    title: 'Blog — Amrut Patil',
  },
  {
    path: 'blog/:slug',
    loadComponent: () =>
      import('./features/blog/blog-detail/blog-detail.component').then((m) => m.BlogDetailComponent),
    title: 'Blog — Amrut Patil',
  },
  { path: '**', redirectTo: '' },
];

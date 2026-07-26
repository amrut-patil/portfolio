import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle';

interface NavLink {
  label: string;
  fragment?: string;
  routerLink: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ThemeToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  readonly links: NavLink[] = [
    { label: 'About', routerLink: '/', fragment: 'about' },
    { label: 'Skills', routerLink: '/', fragment: 'skills' },
    { label: 'Experience', routerLink: '/', fragment: 'experience' },
    { label: 'Projects', routerLink: '/', fragment: 'projects' },
    { label: 'Blog', routerLink: '/blog' },
    { label: 'Contact', routerLink: '/', fragment: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}

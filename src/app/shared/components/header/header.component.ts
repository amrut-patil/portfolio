import { Component, signal, inject } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ThemeToggleComponent],
  template: `
    <header class="header">
      <div class="header__bar container">
        <a routerLink="/" (click)="closeMenu()" class="header__mark" aria-label="Amrut Patil — Home">
          <span class="header__mark-bracket mono">&lt;</span>AP<span class="header__mark-bracket mono">/&gt;</span>
        </a>

        <nav class="header__nav" [class.header__nav--open]="menuOpen()" aria-label="Primary">
          <a routerLink="/" fragment="about" (click)="closeMenu()" class="mono">01 · ABOUT</a>
          <a routerLink="/" fragment="experience" (click)="closeMenu()" class="mono">02 · EXPERIENCE</a>
          <a routerLink="/" fragment="projects" (click)="closeMenu()" class="mono">03 · PROJECTS</a>
          <a routerLink="/blog" (click)="closeMenu()" class="mono">04 · BLOG</a>
          <a routerLink="/" fragment="contact" (click)="closeMenu()" class="mono">05 · CONTACT</a>
        </nav>

        <div class="header__actions">
          <app-theme-toggle />
          <button
            type="button"
            class="header__burger"
            (click)="menuOpen.set(!menuOpen())"
            [attr.aria-expanded]="menuOpen()"
            aria-label="Toggle navigation menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 100;
      background: color-mix(in srgb, var(--bg) 88%, transparent);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border);
    }

    .header__bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 68px;
      gap: 24px;
    }

    .header__mark {
      font-family: var(--font-mono);
      font-weight: 600;
      font-size: 16px;
      color: var(--text-primary);
      letter-spacing: 0.02em;
      flex-shrink: 0;
    }

    .header__mark-bracket {
      color: var(--accent);
    }

    .header__nav {
      display: flex;
      gap: 28px;
      flex: 1;
      justify-content: center;
    }

    .header__nav a {
      font-size: 12px;
      color: var(--text-secondary);
      letter-spacing: 0.05em;
      transition: color 0.15s ease;
      white-space: nowrap;
    }

    .header__nav a:hover {
      color: var(--accent);
    }

    .header__actions {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
    }

    .header__burger {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 4px;
      width: 36px;
      height: 36px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
    }

    .header__burger span {
      display: block;
      width: 16px;
      height: 1.5px;
      background: var(--text-secondary);
      margin: 0 auto;
    }

    @media (max-width: 860px) {
      .header__nav {
        position: fixed;
        top: 68px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: var(--bg-elevated);
        border-bottom: 1px solid var(--border);
        padding: 8px 24px 20px;
        gap: 4px;
        transform: translateY(-8px);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease, transform 0.2s ease;
      }

      .header__nav--open {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
      }

      .header__nav a {
        padding: 12px 0;
        border-bottom: 1px solid var(--border);
        font-size: 13px;
      }

      .header__burger {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
  protected readonly menuOpen = signal(false);
  private readonly router = inject(Router);

  constructor() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.closeMenu());
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}

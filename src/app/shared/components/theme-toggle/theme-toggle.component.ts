import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button
      type="button"
      class="toggle"
      (click)="theme.toggle()"
      [attr.aria-label]="theme.theme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
      [attr.aria-pressed]="theme.theme() === 'light'"
    >
      @if (theme.theme() === 'dark') {
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4.5" />
          <line x1="12" y1="2.5" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="21.5" />
          <line x1="4.2" y1="4.2" x2="6" y2="6" />
          <line x1="18" y1="18" x2="19.8" y2="19.8" />
          <line x1="2.5" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="21.5" y2="12" />
          <line x1="4.2" y1="19.8" x2="6" y2="18" />
          <line x1="18" y1="6" x2="19.8" y2="4.2" />
        </svg>
      } @else {
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
        </svg>
      }
      <span class="toggle__label mono">{{ theme.theme() === 'dark' ? 'DARK' : 'LIGHT' }}</span>
    </button>
  `,
  styles: [`
    .toggle {
      display: flex;
      align-items: center;
      gap: 8px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      color: var(--text-secondary);
      padding: 8px 12px;
      transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;
    }

    .toggle:hover {
      color: var(--accent);
      border-color: var(--border-strong);
      background: var(--surface-hover);
    }

    .toggle__label {
      font-size: 11px;
      letter-spacing: 0.08em;
    }

    @media (max-width: 640px) {
      .toggle__label {
        display: none;
      }
    }
  `]
})
export class ThemeToggleComponent {
  protected readonly theme = inject(ThemeService);
}

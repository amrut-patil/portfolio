import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      class="toggle"
      (click)="theme.toggle()"
      [attr.aria-pressed]="theme.theme() === 'light'"
      [attr.aria-label]="theme.theme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
    >
      <span class="toggle__track">
        <span class="toggle__thumb" [class.toggle__thumb--light]="theme.theme() === 'light'">
          @if (theme.theme() === 'dark') {
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
              <path
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
          } @else {
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" />
              <path
                d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          }
        </span>
      </span>
      <span class="toggle__label mono">{{ theme.theme() === 'dark' ? 'DARK' : 'LIGHT' }}</span>
    </button>
  `,
  styleUrl: './theme-toggle.scss',
})
export class ThemeToggleComponent {
  readonly theme = inject(ThemeService);
}

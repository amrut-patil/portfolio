import { Component } from '@angular/core';
import { PROFILE } from '../../../core/data/profile-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer__bar container">
        <p class="footer__note mono">
          BUILT WITH ANGULAR · © {{ year }} {{ profile.name.toUpperCase() }}
        </p>
        <div class="footer__links">
          <a [href]="profile.social.github" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a [href]="profile.social.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a [href]="'mailto:' + profile.social.email">Email</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      border-top: 1px solid var(--border);
      margin-top: 80px;
    }

    .footer__bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      padding: 28px 24px;
    }

    .footer__note {
      font-size: 11px;
      color: var(--text-tertiary);
      letter-spacing: 0.05em;
    }

    .footer__links {
      display: flex;
      gap: 20px;
    }

    .footer__links a {
      font-size: 13px;
      color: var(--text-secondary);
      transition: color 0.15s ease;
    }

    .footer__links a:hover {
      color: var(--accent);
    }
  `]
})
export class FooterComponent {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}

import { Component } from '@angular/core';
import { PROFILE } from '../../../core/data/profile-data';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionHeaderComponent],
  template: `
    <section id="contact" class="section">
      <div class="container">
        <app-section-header index="05" title="Contact" meta="OPEN CHANNELS" />

        <div class="contact__panel">
          <p class="contact__lead">
            Open to Angular / full-stack architecture roles and consulting engagements.
            Reach out on any channel below.
          </p>

          <div class="contact__grid">
            <a class="contact__link" [href]="'mailto:' + profile.social.email">
              <span class="contact__link-label mono">EMAIL</span>
              <span class="contact__link-value">{{ profile.social.email }}</span>
            </a>

            <a class="contact__link" [href]="'tel:' + phoneHref">
              <span class="contact__link-label mono">PHONE</span>
              <span class="contact__link-value">{{ profile.social.phone }}</span>
            </a>

            <a class="contact__link" [href]="profile.social.linkedin" target="_blank" rel="noopener noreferrer">
              <span class="contact__link-label mono">LINKEDIN</span>
              <span class="contact__link-value">/in/amrut-patil</span>
            </a>

            <a class="contact__link" [href]="profile.social.github" target="_blank" rel="noopener noreferrer">
              <span class="contact__link-label mono">GITHUB</span>
              <span class="contact__link-value">/amrut-patil</span>
            </a>
          </div>

          <p class="contact__location mono">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z" />
              <circle cx="12" cy="9.5" r="2.4" />
            </svg>
            {{ profile.social.location }}
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      padding: 64px 0 96px;
      scroll-margin-top: 88px;
    }

    .contact__panel {
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      background: var(--surface);
      padding: 40px;
    }

    .contact__lead {
      font-size: 16px;
      line-height: 1.7;
      max-width: 60ch;
      margin-bottom: 32px;
    }

    .contact__grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }

    .contact__link {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: 16px 18px;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: var(--bg-elevated);
      transition: border-color 0.15s ease, transform 0.15s ease;
    }

    .contact__link:hover {
      border-color: var(--accent);
      transform: translateY(-1px);
    }

    .contact__link-label {
      font-size: 10px;
      color: var(--accent);
      letter-spacing: 0.1em;
    }

    .contact__link-value {
      font-size: 14px;
      color: var(--text-primary);
      word-break: break-word;
    }

    .contact__location {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 28px;
      font-size: 12px;
      color: var(--text-tertiary);
      letter-spacing: 0.03em;
    }

    @media (max-width: 640px) {
      .contact__panel {
        padding: 26px;
      }

      .contact__grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  protected readonly profile = PROFILE;
  protected readonly phoneHref = PROFILE.social.phone.replace(/\s+/g, '');
}

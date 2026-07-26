import { Component, signal } from '@angular/core';
import { PROFILE } from '../../../core/data/profile-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero__inner container">
        <div class="hero__coords mono">
          <span>LAT 18.5204° N</span>
          <span class="hero__coords-divider">·</span>
          <span>LON 73.8567° E</span>
          <span class="hero__coords-divider">·</span>
          <span>{{ profile.social.location.toUpperCase() }}</span>
        </div>

        <div class="hero__grid">
          <div class="hero__copy">
            <p class="hero__eyebrow mono">
              <span class="hero__dot"></span>
              PROFILE — REV. {{ currentYear }}
            </p>
            <h1 class="hero__name">{{ profile.name }}</h1>
            <p class="hero__title">{{ profile.title }}</p>
            <p class="hero__tagline">{{ profile.tagline }}</p>

            <div class="hero__cta">
              <a href="#contact" class="btn btn--primary">Get in touch</a>
              <a [href]="profile.resumeUrl" download class="btn btn--ghost">
                Download résumé
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 3v13m0 0-5-5m5 5 5-5M4 21h16" />
                </svg>
              </a>
            </div>
          </div>

          <div class="hero__figure">
            <div class="hero__frame">
              @if (!imageFailed()) {
                <img
                  class="hero__dp"
                  src="/assets/displayPicture/dp.jpg"
                  [alt]="profile.name + ' — profile photo'"
                  (error)="imageFailed.set(true)"
                />
              } @else {
                <div class="hero__avatar" role="img" aria-label="Placeholder profile portrait">
                  <svg viewBox="0 0 100 100" width="56%" height="56%" fill="none" stroke="currentColor" stroke-width="1.4">
                    <circle cx="50" cy="36" r="16" />
                    <path d="M18 88c4-20 16-30 32-30s28 10 32 30" />
                  </svg>
                </div>
              }
              <span class="hero__frame-tag mono">{{ imageFailed() ? 'FIG. 01 — PLACEHOLDER' : 'FIG. 01 — PROFILE' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 56px 0 88px;
      position: relative;
      overflow: hidden;
    }

    .hero__coords {
      display: flex;
      gap: 8px;
      font-size: 11px;
      color: var(--text-tertiary);
      letter-spacing: 0.06em;
      margin-bottom: 40px;
      flex-wrap: wrap;
    }

    .hero__coords-divider {
      color: var(--border-strong);
    }

    .hero__grid {
      display: grid;
      grid-template-columns: 1.3fr 0.9fr;
      gap: 48px;
      align-items: center;
    }

    .hero__eyebrow {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      color: var(--accent);
      letter-spacing: 0.08em;
      margin-bottom: 20px;
    }

    .hero__dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 3px var(--accent-soft);
    }

    .hero__name {
      font-size: clamp(38px, 6vw, 64px);
      line-height: 1.05;
      color: var(--text-primary);
    }

    .hero__title {
      margin-top: 14px;
      font-size: clamp(16px, 2vw, 19px);
      color: var(--accent-strong);
      font-weight: 500;
    }

    .hero__tagline {
      margin-top: 16px;
      font-size: 16px;
      color: var(--text-secondary);
      max-width: 46ch;
      line-height: 1.65;
    }

    .hero__cta {
      display: flex;
      gap: 14px;
      margin-top: 36px;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 22px;
      border-radius: var(--radius-md);
      font-size: 14px;
      font-weight: 500;
      border: 1px solid transparent;
      transition: transform 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
    }

    .btn--primary {
      background: var(--accent);
      color: #051119;
    }

    .btn--primary:hover {
      transform: translateY(-1px);
      background: var(--accent-strong);
    }

    .btn--ghost {
      border-color: var(--border-strong);
      color: var(--text-primary);
      background: transparent;
    }

    .btn--ghost:hover {
      border-color: var(--accent);
      color: var(--accent);
      transform: translateY(-1px);
    }

    .hero__figure {
      display: flex;
      justify-content: center;
    }

    .hero__frame {
      position: relative;
      width: min(280px, 60vw);
      aspect-ratio: 1;
      border: 1px solid var(--border-strong);
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      background:
        linear-gradient(var(--grid-line) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
      background-size: 20px 20px;
    }

    .hero__frame::before,
    .hero__frame::after {
      content: '';
      position: absolute;
      width: 14px;
      height: 14px;
      border-color: var(--accent);
      border-style: solid;
    }

    .hero__frame::before {
      top: -1px;
      left: -1px;
      border-width: 2px 0 0 2px;
    }

    .hero__frame::after {
      bottom: -1px;
      right: -1px;
      border-width: 0 2px 2px 0;
    }

    .hero__dp {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .hero__avatar {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-tertiary);
    }

    .hero__frame-tag {
      position: absolute;
      bottom: -28px;
      font-size: 10px;
      color: var(--text-tertiary);
      letter-spacing: 0.08em;
    }

    @media (max-width: 860px) {
      .hero__grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .hero__figure {
        order: -1;
      }

      .hero__frame {
        width: 180px;
      }
    }
  `]
})
export class HeroComponent {
  protected readonly profile = PROFILE;
  protected readonly currentYear = new Date().getFullYear();
  protected readonly imageFailed = signal(false);
}

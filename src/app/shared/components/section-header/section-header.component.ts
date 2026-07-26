import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div class="title-block">
      <div class="title-block__index mono">{{ index }}</div>
      <div class="title-block__main">
        <h2 class="title-block__title">{{ title }}</h2>
        @if (subtitle) {
          <p class="title-block__subtitle">{{ subtitle }}</p>
        }
      </div>
      <div class="title-block__meta mono">
        <span>SEC. {{ index }}</span>
        <span class="title-block__divider">/</span>
        <span>{{ meta }}</span>
      </div>
    </div>
  `,
  styles: [`
    .title-block {
      display: flex;
      align-items: baseline;
      gap: 20px;
      padding-bottom: 18px;
      margin-bottom: 40px;
      border-bottom: 1px solid var(--border);
      position: relative;
    }

    .title-block::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 64px;
      height: 2px;
      background: var(--accent);
    }

    .title-block__index {
      font-size: 13px;
      color: var(--accent);
      letter-spacing: 0.05em;
      flex-shrink: 0;
    }

    .title-block__main {
      flex: 1;
      min-width: 0;
    }

    .title-block__title {
      font-size: clamp(24px, 3.2vw, 32px);
      color: var(--text-primary);
    }

    .title-block__subtitle {
      margin-top: 4px;
      font-size: 14px;
      color: var(--text-tertiary);
    }

    .title-block__meta {
      font-size: 11px;
      color: var(--text-tertiary);
      letter-spacing: 0.06em;
      display: flex;
      gap: 6px;
      flex-shrink: 0;
      white-space: nowrap;
    }

    .title-block__divider {
      color: var(--border-strong);
    }

    @media (max-width: 640px) {
      .title-block {
        flex-wrap: wrap;
        gap: 8px 20px;
      }
      .title-block__meta {
        order: 3;
        width: 100%;
      }
    }
  `]
})
export class SectionHeaderComponent {
  /** Two-digit section index, e.g. "01" — encodes reading order like a drawing sheet number. */
  @Input({ required: true }) index!: string;
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  /** Short annotation shown top-right, e.g. "2004—PRESENT" or "SCALE: FULL-STACK". */
  @Input() meta = '';
}

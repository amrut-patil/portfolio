import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="title-block">
      <div class="title-block__left">
        <span class="title-block__index mono">{{ index }}</span>
        <h2 class="title-block__title">{{ title }}</h2>
      </div>
      <div class="title-block__right mono">
        @if (drawingNo) {
          <span>NO. {{ drawingNo }}</span>
        }
        @if (scale) {
          <span>SCALE {{ scale }}</span>
        }
      </div>
    </div>
    @if (subtitle) {
      <p class="title-block__subtitle">{{ subtitle }}</p>
    }
  `,
  styleUrl: './section-header.scss',
})
export class SectionHeaderComponent {
  @Input({ required: true }) index!: string;
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() drawingNo?: string;
  @Input() scale?: string;
}

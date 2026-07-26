import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe } from '@angular/common';
import { BlogService } from '../../../core/services/blog.service';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, AsyncPipe, DatePipe, SectionHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss',
})
export class BlogListComponent {
  private readonly blogService = inject(BlogService);
  readonly posts$ = this.blogService.getPosts();
}

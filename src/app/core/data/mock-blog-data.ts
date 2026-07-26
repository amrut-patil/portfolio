import { BlogPost } from '../models/blog-post.model';

/**
 * Placeholder blog posts so the Blog section has real content to render
 * before a CMS is wired up. Replace / remove once `CmsBlogService` is in place.
 */
export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    slug: 'welcome-to-my-blog',
    title: 'Welcome to my blog',
    excerpt:
      'Kicking things off — what I plan to write about here: Angular architecture, lessons from 18 years of enterprise software, and the occasional deep dive.',
    content: `This is the first post on this blog. Over the years working on enterprise trading and risk platforms, I've picked up a lot of hard-won lessons about front-end architecture, framework migrations, and keeping large Angular codebases maintainable.

I'll be using this space to write about:

- Angular architecture patterns for large enterprise applications
- Lessons learned migrating AngularJS applications to modern Angular
- Practical GraphQL and REST API integration patterns
- Notes from 15+ years in enterprise software development

More posts coming soon.`,
    tags: ['Angular', 'Meta'],
    publishedAt: '2026-07-01',
    readingTimeMinutes: 2,
  },
];

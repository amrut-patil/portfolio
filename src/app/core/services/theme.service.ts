import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  /** Reactive current theme. Defaults to 'dark' per product requirement. */
  readonly theme = signal<Theme>(this.readInitialTheme());

  constructor() {
    // Keep the DOM attribute and localStorage in sync whenever the signal changes.
    effect(() => {
      const value = this.theme();
      document.documentElement.setAttribute('data-theme', value);
      try {
        localStorage.setItem(STORAGE_KEY, value);
      } catch {
        // localStorage may be unavailable (e.g. private browsing) — safe to ignore.
      }
    });
  }

  toggle(): void {
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }

  private readInitialTheme(): Theme {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch {
      // ignore
    }
    // Default theme is dark regardless of OS preference, per requirement.
    return 'dark';
  }
}

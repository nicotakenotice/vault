import { Injectable, signal } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { STORAGE_KEY } from '@lib/utils';

type ThemeName = 'light' | 'dark';

const DARK_THEME_CLASS = 'ion-palette-dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal<boolean>(false);

  /* ======================================================================= */

  initTheme(): void {
    const name = localStorage.getItem(STORAGE_KEY.THEME) || 'light';
    this.setTheme(name as ThemeName);
  }

  async setTheme(name: ThemeName): Promise<void> {
    const isDark = name === 'dark';
    const html = document.documentElement;

    // Toggle html class
    isDark ? html.classList.add(DARK_THEME_CLASS) : html.classList.remove(DARK_THEME_CLASS);

    // Change meta tag
    const metaTag = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
    metaTag.content = getComputedStyle(html).getPropertyValue('--ion-background-color');

    localStorage.setItem(STORAGE_KEY.THEME, name);
    this.isDark.set(isDark);

    try {
      await StatusBar.setStyle({ style: isDark ? Style.Dark : Style.Light });
    } catch {}
  }
}

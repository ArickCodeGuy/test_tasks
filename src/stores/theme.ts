import { defineStore } from 'pinia';

export type Themes = 'light' | 'dark';

// @ts-ignore
// WTF
const theme: string = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : 'light';

const state = () => ({
  theme,
});

document.body.classList.add(theme);

export const useThemeStore = defineStore({
  id: 'theme',
  state,
  actions: {
    setTheme(theme: Themes) {
      if (document.body.classList.contains(theme)) {
        console.warn('trying to set already setted theme');
        return;
      }

      document.body.classList.remove(this.$state.theme);
      this.$state.theme = theme;
      localStorage.setItem('theme', theme);
      document.body.classList.add(theme);
    },
  },
});

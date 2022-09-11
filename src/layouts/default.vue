<template>
  <div class="Default-layout">
    <header class="header">
      <div class="container">
        <nav class="nav">
          <router-link to="/">Main</router-link>
          <router-link to="/tests">Tests</router-link>
        </nav>
        <div class="change-theme" @click="changeTheme"></div>
      </div>
    </header>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useThemeStore } from '@/stores/theme';
export default defineComponent({
  setup() {
    const themeStore = useThemeStore();
    function changeTheme() {
      const new_theme = themeStore.theme === 'light' ? 'dark' : 'light';
      themeStore.setTheme(new_theme);
    }
    return {
      changeTheme,
    };
  },
});
</script>

<style lang="scss" scoped>
.Default-layout {
}
.header {
  padding-top: 5px;
  padding-bottom: 5px;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--column-gap);
  }
}
.nav {
  display: flex;
  align-items: center;
  gap: 10px;
  a {
    font-size: 1.6rem;
    line-height: 1em;
    color: var(--color-primary);
    text-decoration: none;
  }
}
.change-theme {
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  border-radius: 50%;
  background-color: var(--contrast);
}
</style>

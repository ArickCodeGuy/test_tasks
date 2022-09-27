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
    <footer class="footer">
      <div class="container">
        <div class="icons">
          <a
            href="https://github.com/ArickCodeGuy"
            target="_blank"
            class="icon"
            style="background-image: url('/logo.jpg')"
          ></a>
          <a
            href="https://github.com/ArickCodeGuy/test_tasks"
            target="_blank"
            class="icon"
            style="background-image: url('/github_logo.png')"
          ></a>
        </div>
      </div>
    </footer>
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
  background-color: rgba(var(--rgba-bgc), 0.3);
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 2rem;
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
.footer {
  .icons {
    display: flex;
    justify-content: center;
    gap: var(--column-gap);
    .icon {
      width: 3rem;
      height: 3rem;
      // border: 1px solid var(--contrast);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 50%;
      overflow: hidden;
      transition: 0.3s;
      &:hover {
        scale: 1.2;
      }
    }
  }
}
</style>

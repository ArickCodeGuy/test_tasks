<template>
  <div class="Default-layout">
    <Header />
    <div v-if="route.path !== '/'" class="container">
      <Breadcrumbs />
    </div>
    <slot></slot>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { useThemeStore } from '@/stores/theme';
import { useRoute } from 'vue-router';
export default defineComponent({
  components: { Header, Footer, Breadcrumbs },
  setup() {
    const themeStore = useThemeStore();
    const route = useRoute();
    function changeTheme() {
      const new_theme = themeStore.theme === 'light' ? 'dark' : 'light';
      themeStore.setTheme(new_theme);
    }
    return {
      changeTheme,
      route,
    };
  },
});
</script>

<style lang="scss" scoped>
.Default-layout {
}
</style>

<template>
  <div class="Breadcrumbs">
    <template v-for="(item, i) in crumbs" :key="item.link">
      <router-link :to="item.link">{{ item.text }} </router-link>
      <span class="separator">{{ i !== crumbs.length - 1 ? '/' : '' }}</span>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export type Link = {
  text: string;
  link: string;
};

export default defineComponent({
  setup() {
    const route = useRoute();
    const crumbs = computed(() => {
      const arr = route.path.substring(1, route.path.length).split('/');
      const links = arr.reduce((links_arr, item, i) => {
        if (i === 0) {
          links_arr.push({
            text: 'Main',
            link: '/',
          });
          links_arr.push({
            text: item,
            link: item,
          });
        } else {
          links_arr.push({
            text: item,
            link: `${links_arr[i - 1].link}/${item}`,
          });
        }

        return links_arr;
      }, [] as Link[]);
      return links;
    });
    return { crumbs };
  },
});
</script>

<style lang="scss" scoped>
.Breadcrumbs {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 10px;
  a {
    color: var(--color-primary);
    text-decoration: none;
  }
}
</style>

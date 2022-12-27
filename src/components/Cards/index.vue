<template>
  <div class="Cards">
    <Card v-for="(item, key) in items" :key="key" :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CardItem } from './types';

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<CardItem[]>,
      default: () => [],
    },
  },
});
</script>

<style lang="scss" scoped>
.Cards {
  display: grid;
  gap: var(--column-gap);
}
</style>

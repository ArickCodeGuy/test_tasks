<template>
  <div class="Tests-page">
    <seciton class="section">
      <div class="container">
        <h1>Test tasks</h1>
        <Cards :items="items" />
      </div>
    </seciton>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import items from '@/utils/tests';

export default defineComponent({
  setup() {
    return { items };
  },
});
</script>

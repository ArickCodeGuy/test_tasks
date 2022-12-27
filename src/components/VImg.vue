<template>
  <div class="VImg">
    <img v-if="props.src" :src="$props.src" :alt="props.alt" />
    <div v-else>{{ props.alt ? props.alt : 'Thumbnail' }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style lang="scss" scoped>
.VImg {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    &::after {
      content: 'Thumbnail';
      display: block;
    }
  }
}
</style>

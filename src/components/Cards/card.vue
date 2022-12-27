<template>
  <div class="Card">
    <div class="left">
      <img v-if="item.thumbnail" :src="item.thumbnail" alt="" />
    </div>
    <div class="right">
      <div class="right__content">
        <h2>{{ item.title }}</h2>
        <p>
          {{ item.description }}
        </p>
        <template v-if="item.tags">
          <h3>Tags:</h3>
          <div class="tags">
            <button v-for="(tag, i) in item.tags" :key="i" class="tag">
              {{ tag }}
            </button>
          </div>
        </template>
      </div>
      <div class="right__bottom">
        <a v-if="item.demo" class="btn" :href="item.demo">Demo</a>
        <a v-if="item.github" class="btn" :href="item.github" target="_blank">
          Github
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CardItem } from './types';

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<CardItem>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.Card {
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(var(--rgba-bgc), 0.4);
  color: var(--color-secondary);
  text-decoration: none;
  @media (min-width: 1200px) {
    height: 400px;
    display: flex;
  }
  .left {
    position: relative;
    flex-shrink: 0;
    background-color: rgba(var(--rgba-bgc), 0.2);
    @media (min-width: 1200px) {
      width: 400px;
      &::after {
        content: '';
        display: block;
        padding-top: 100%;
      }
    }
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      @media (min-width: 1200px) {
        width: 80%;
        height: 80%;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    &__content {
      margin-bottom: 1rem;
    }
    &__bottom {
      margin-top: auto;
      display: flex;
      gap: var(--column-gap);
      flex-wrap: wrap;
      @media (min-width: 768px) {
        .btn {
          width: unset;
        }
      }
    }
  }
}
</style>

<template>
  <div class="WizardTab" :class="{ active: props.active }">
    <div class="WizardTab__top">
      <div class="WizardTab__title">{{ props.title }}</div>
      <div class="WizardTab__price">{{ numToPrice(tab_summary) }}</div>
    </div>
    <div class="WizardTab__content">
      <div class="WizardTab__left">
        <slot name="left"></slot>
      </div>
      <div class="WizardTab__separator"></div>
      <div class="WizardTab__right">
        <div
          v-for="(select, select_index) in props.select"
          :key="select_index"
          class="select-container"
        >
          <div>
            <div class="select__title">{{ select.title }}</div>
            <select
              class="select"
              :value="select.active_option ?? 0"
              @change="
                $emit('select_change', {
                  select_index,
                  option_index: parseInt($event.target.value),
                })
              "
            >
              <option :value="i" v-for="(item, i) in select.items" :key="i">
                {{ item.title }}
              </option>
            </select>
          </div>
        </div>
        <div v-if="props.options.length" class="checkboxes-container">
          <div
            v-for="(checkbox, checkboxIndex) in props.options"
            :key="checkbox.title"
            class="checkbox-container"
            @click="$emit('option_change', checkboxIndex)"
          >
            <div
              class="checkbox"
              :class="{ active: checkbox.active === true }"
            ></div>
            <div class="checkbox-text">{{ checkbox.title }}</div>
          </div>
        </div>
        <div
          class="btn WizardTab__choose-btn"
          :class="{ active: props.active }"
          @click="$emit('choose_variant')"
        >
          {{ props.active ? 'Выбрано' : 'Выбрать' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { numToPrice } from '../helpers/index';

export type Option = {
  title: string;
  price: number;
  active?: boolean;
};
export type Select = {
  title: string;
  items: Option[];
  active_option?: number;
};

export default defineComponent({
  props: {
    active: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    price_default: {
      type: Number,
      required: true,
    },
    options: {
      type: Object as PropType<Option[]>,
      default: () => [],
    },
    select: {
      type: Object as PropType<Select[]>,
      default: () => [],
    },
  },
  setup(props) {
    const tab_summary = computed<number>(() => {
      let summ = 0;
      summ += props.price_default;
      props.select.forEach((select) => {
        const active_option = select.active_option ?? 0;
        summ += select.items[active_option].price;
      });

      props.options.forEach((option) => {
        option.active ? (summ += option.price) : false;
      });
      return summ;
    });
    return {
      tab_summary,
      props,
      numToPrice,
    };
  },
});
</script>

<style lang="scss" scoped>
.WizardTab {
  position: relative;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px 20px;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 5px;
    background-color: lightgrey;
  }
  &.active {
    &::before {
      background-color: #2fcb5a;
    }
  }
  &__top {
    margin-bottom: 1em;
    display: grid;
    grid-gap: 10px;
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  }
  &__title {
    font-weight: bold;
  }
  &__content {
    display: grid;
    grid-gap: 20px;
    @media (min-width: 576px) {
      display: flex;
      gap: 10px;
    }
  }
  &__left {
    width: 100%;
  }
  &__separator {
    width: 1px;
    background-color: grey;
    display: none;
    @media (min-width: 576px) {
      display: block;
    }
  }
  &__right {
    @media (min-width: 576px) {
      width: 200px;
      flex-shrink: 0;
    }
  }
  &__choose-btn {
    margin-top: 10px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
    color: black;
    &.active {
      background-color: #2fcb5a;
      color: white;
    }
  }
}
.checkboxes-container {
  display: grid;
  grid-gap: 10px;
}
.checkbox-container {
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.checkbox {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 5px;
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 7px;
    transform: rotate(45deg) translateY(-3px);
    display: none;
    border: 2px solid grey;
    border-left: none;
    border-top: none;
  }
  &.active {
    &::after {
      display: block;
    }
  }
}
.checkbox-text {
  width: 100%;
  color: grey;
  text-align: center;
}
.select-container {
  display: grid;
  grid-gap: 10px;
}
.select {
  width: 100%;
  padding: 5px;
  &__title {
    margin-bottom: 1em;
  }
}
</style>

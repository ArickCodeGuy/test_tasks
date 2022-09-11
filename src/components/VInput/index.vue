<template>
  <div class="v-input">
    <input
      :type="props.type"
      class="v-input__input"
      :placeholder="props.placeholder"
    />
    <div class="placeholder">
      {{ props.placeholder }}
      <span v-if="props.required" class="placeholder__required">*</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'Placeholder',
    },
    required: {
      type: Boolean,
    },
    modelValue: {
      type: String,
      default: '',
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
.v-input {
  position: relative;
  &__input {
    padding: 18px 10px 10px;
    &::placeholder {
      color: transparent;
      user-select: none;
    }
  }
  .placeholder {
    position: absolute;
    user-select: none;
    pointer-events: none;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left;
    transition: 0.3s;
    &__required {
      margin-left: 5px;
      color: red;
    }
  }
  .v-input__input:focus + .placeholder,
  :not(.v-input__input:placeholder-shown) + .placeholder {
    top: 1px;
    left: 10px;
    transform: scale(0.5);
  }
}
</style>

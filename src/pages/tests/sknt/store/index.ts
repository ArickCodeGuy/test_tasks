import { defineStore } from 'pinia';
import Cart from '../data.json';

interface Option {
  title: string;
  price: number;
  active?: boolean;
}
interface Select {
  title: string;
  items: Option[];
  active_option?: number;
}
interface cartVariant {
  title: string;
  description: string;
  color: string;
  price_default: number;
  options: Option[];
  select: Select[];
}
interface cartItem {
  title: string;
  variants: cartVariant[];
  active_variant?: number;
}

export const useCart = defineStore('cart', {
  state: () => {
    return {
      data: Cart as cartItem[],
    };
  },
  actions: {
    changeTab({
      item_index,
      variant_index,
    }: {
      variant_index: number;
      item_index: number;
    }): void {
      this.data[item_index].active_variant = variant_index;
    },
    changeOption({
      item_index,
      variant_index,
      option_index,
    }: {
      item_index: number;
      variant_index: number;
      option_index: number;
    }): void {
      const option =
        this.data[item_index].variants[variant_index].options[option_index];
      option.active = !option.active;
    },
    changeSelect({
      item_index,
      variant_index,
      select_index,
      option_index,
    }: {
      item_index: number;
      variant_index: number;
      select_index: number;
      option_index: number;
    }): void {
      this.data[item_index].variants[variant_index].select[
        select_index
      ].active_option = option_index;
    },
  },
  getters: {
    summary(state) {
      let summ = 0;

      state.data.forEach((item) => {
        if (item.active_variant === undefined) return;

        const variant = item.variants[item.active_variant];
        summ += variant.price_default;

        variant.select.forEach((select) => {
          const active_option = select.active_option ?? 0;
          summ += select.items[active_option].price;
        });

        variant.options.forEach((option) => {
          option.active ? (summ += option.price) : false;
        });
      });

      return summ;
    },
  },
});

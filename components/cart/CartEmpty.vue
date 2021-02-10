<template>
  <div>
    <div :class="$style['cart-empty__text']">
      Пока что вы ничего не добавили в корзину.
    </div>
    <div :class="$style['cart-empty__button']">
      <button @click.prevent="handleCloseCart">Перейти к выбору</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartEmpty',
  methods: {
    ...mapActions({ toggleCart: 'cart/toggleCart' }),
    handleCloseCart() {
      this.toggleCart()
    },
  },
}
</script>

<style module lang="scss">
@import '../../assets/styles/config';

.cart-empty {
  &__text {
    font-size: 22px;
    color: $text-color-primary;
    padding-bottom: 24px;
  }

  &__button {
    button {
      @include Button-primary;
    }
  }
}
</style>

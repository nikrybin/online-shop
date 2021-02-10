<template>
  <div :class="$style.header">
    <div :class="$style.header__container">
      <div :class="$style.header__title" @click="handleClickTitle(1)">
        <nuxt-link to="/category/1">TestList</nuxt-link>
      </div>
      <div
        :class="$style['header__cart-button']"
        @click.prevent="handleOpenCart"
      >
        <Cart />
        <Badge />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Cart from '../../assets/icons/cart.svg'
import Badge from './Badge'

export default {
  name: 'Header',
  components: {
    Badge,
    Cart,
  },
  methods: {
    ...mapActions({
      toggleCart: 'cart/toggleCart',
      fetchProducts: 'products/fetchProducts',
    }),
    handleOpenCart() {
      this.toggleCart()
    },
    handleClickTitle(option) {
      this.fetchProducts(option)
    },
  },
}
</script>

<style module lang="scss">
@import '../../assets/styles/config';

.header {
  height: 66px;
  box-shadow: $box-shadow-primary;

  &__container {
    background-color: $background-color-primary;
    height: 100%;
    width: 90%;
    max-width: 1264px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__title a {
    font-weight: 700;
    font-size: 22px;
    color: $text-color-secondary;
    text-decoration: none;
  }

  &__cart-button {
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    svg {
      width: 24px;
      fill: $text-color-primary;
      transition: fill 250ms ease-out;
    }

    &:hover {
      cursor: pointer;

      svg {
        fill: $text-color-thirdly;
      }
    }
  }
}
</style>

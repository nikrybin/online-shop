<template>
  <div :class="$style.container">
    <div
      :class="[$style.background, { [$style.background_visible]: isCartOpen }]"
    ></div>
    <div :class="[$style.cart, { [$style.cart_visible]: isCartOpen }]">
      <div :class="$style.cart__container">
        <div :class="$style.cart__header">
          <div :class="$style.cart__header__title">Корзина</div>
          <div
            :class="$style.cart__header__button"
            @click.prevent="handleCloseCart"
          >
            <Close />
          </div>
        </div>
        <CartSuccess v-if="isRequestSuccessful" />
        <CartEmpty v-else-if="!getItemsCountInCart" />
        <CartContent v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Close from '../../assets/icons/close.svg'
import CartEmpty from './CartEmpty'
import CartContent from './CartContent'
import CartSuccess from './CartSuccess'

export default {
  name: 'Cart',
  components: {
    Close,
    CartEmpty,
    CartContent,
    CartSuccess,
  },
  computed: mapGetters({
    isCartOpen: 'cart/isCartOpen',
    getItemsCountInCart: 'cart/getItemsCountInCart',
    isRequestSuccessful: 'cart/isRequestSuccessful',
  }),
  methods: {
    ...mapActions({
      toggleCart: 'cart/toggleCart',
      resetCart: 'cart/resetCart',
    }),
    handleCloseCart() {
      this.toggleCart()
      if (this.isRequestSuccessful) {
        setTimeout(() => {
          this.resetCart()
        }, 250)
      }
    },
  },
}
</script>

<style module lang="scss">
@import '../../assets/styles/config';

.container {
  position: fixed;
  z-index: 1;
}

.background {
  background-color: $background-color-primary;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  position: fixed;
  transition: opacity 350ms ease-out, transform 0ms linear 350ms;
  opacity: 0;
  transform: scale(0);

  &_visible {
    transition: transform 0ms linear 0ms, opacity 350ms ease-out 0ms;
    opacity: 0.8;
    transform: scale(1);
  }
}

.cart {
  height: 100vh;
  width: 460px;
  background-color: $background-color-primary;
  box-shadow: $box-shadow-menu;
  z-index: 3;
  position: fixed;
  border-radius: 8px 0px 0px 8px;
  right: -460px;
  transition: right 350ms ease-out;
  overflow-x: scroll;

  &_visible {
    right: 0px;
  }

  &__container {
    padding: 50px 40px 50px 40px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 24px;

    &__title {
      font-size: 32px;
      color: $text-color-primary;
      font-weight: 700;
    }

    &__button {
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        transition: transform 250ms ease-out;
      }

      &:hover {
        cursor: pointer;

        svg {
          transform: rotate(90deg);
        }
      }
    }
  }
}
</style>

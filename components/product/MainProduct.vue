<template>
  <div :class="$style['main-product__card']">
    <div :class="$style['main-product__container']">
      <div :class="$style['main-product__content']">
        <div :class="$style['main-product__content__rating']">
          <Rating :rating="product.rating" />
        </div>
        <div :class="$style['main-product__content__photo']">
          <img :src="$config.baseURL + product.photo" :alt="product.name" />
        </div>
        <div
          :class="[
            $style['main-product__content__cart-button'],
            {
              [$style[
                'main-product__content__cart-button_added'
              ]]: isProductInCart(product),
            },
          ]"
          @click="handleOnClickCart(product)"
        >
          <Cart />
        </div>
      </div>
      <div :class="$style['main-product__title']">
        {{ formatName(product.name) }}
      </div>
      <div :class="$style['main-product__price']">
        {{ formatPrice(product.price) }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Cart from '../../assets/icons/cart.svg'
import Rating from '../common/Rating'

export default {
  name: 'MainProduct',
  components: {
    Cart,
    Rating,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: mapState({ cart: 'cart' }),
  methods: {
    ...mapActions({
      addToCart: 'cart/addToCart',
      removeFromCart: 'cart/removeFromCart',
    }),
    formatName(name) {
      return name.toLowerCase()
    },
    formatPrice(price) {
      return Intl.NumberFormat('ru-ru', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
      }).format(price)
    },
    handleOnClickCart(product) {
      if (this.isProductInCart(product)) {
        this.removeFromCart(product)
      } else {
        this.addToCart(product)
      }
    },
    isProductInCart(product) {
      if (this.cart.items.find((item) => item.id === product.id)) {
        return true
      }
      return false
    },
  },
}
</script>

<style module lang="scss">
@import '../../assets/styles/config';

.main-product {
  &__card {
    @include ProductCard;
    margin-bottom: 16px;
    max-width: 265px;
  }

  &__container {
    padding: 16px;
  }

  &__content {
    width: 100%;
    display: flex;
    justify-content: space-between;

    &__photo {
      height: 180px;

      img {
        height: 100%;
      }
    }

    &__cart-button {
      margin-top: -1px;
      height: 16px;
      width: 16px;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 12px;
        fill: $text-color-thirdly;
        transition: fill 250ms ease-out, opacity 250ms ease-out;
      }

      &:hover {
        cursor: pointer;

        svg {
          fill: $text-color-primary;
        }
      }

      &_added {
        svg {
          fill: $text-color-success;
        }

        &:hover {
          svg {
            fill: $text-color-success;
            opacity: 0.7;
          }
        }
      }
    }
  }

  &__title {
    color: $text-color-secondary;
    font-weight: 400;
    font-size: 14px;
    text-transform: capitalize;
  }

  &__price {
    color: $text-color-primary;
    font-weight: 700;
    font-size: 14px;
    padding-top: 8px;
  }
}
</style>

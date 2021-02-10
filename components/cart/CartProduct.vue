<template>
  <div :class="$style['cart-product__card']">
    <div :class="$style['cart-product__container']">
      <div :class="$style['cart-product__photo']">
        <img :src="$config.baseURL + product.photo" :alt="product.name" />
      </div>
      <div :class="$style['cart-product__info__container']">
        <div :class="$style['cart-product__info__name']">
          {{ formatName(product.name) }}
        </div>
        <div :class="$style['cart-product__info__price']">
          {{ formatPrice(product.price) }}
        </div>
        <div :class="$style['cart-product__info__rating']">
          <Rating :rating="product.rating" />
        </div>
      </div>
      <div :class="$style['cart-product__button__container']">
        <div
          :class="$style['cart-product__button']"
          @click.prevent="handleRemoveFromCart(product)"
        >
          <Delete />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Delete from '../../assets/icons/delete.svg'
import Rating from '../common/Rating'

export default {
  name: 'CartProduct',
  components: {
    Delete,
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
    handleRemoveFromCart(product) {
      this.removeFromCart(product)
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

.cart-product {
  &__card {
    @include ProductCard;
    margin-bottom: 12px;
  }

  &__container {
    padding: 15px;
    display: flex;
    justify-content: space-between;
  }

  &__photo {
    height: 90px;

    img {
      height: 100%;
    }
  }

  &__info {
    &__container {
      position: relative;
      flex: 1 1 auto;
    }

    &__name {
      text-transform: capitalize;
      color: $text-color-secondary;
      font-size: 14px;
      font-weight: 400;
      word-break: break-all;
      padding-bottom: 6px;
    }

    &__price {
      color: $text-color-primary;
      font-size: 14px;
      font-weight: 700;
    }

    &__rating {
      position: absolute;
      bottom: 0;
    }
  }

  &__button {
    svg {
      transition: fill 250ms ease-out;
      fill: $text-color-thirdly;
    }

    &:hover {
      cursor: pointer;

      svg {
        fill: $text-color-primary;
      }
    }

    &__container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

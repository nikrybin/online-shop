<template>
  <div>
    <div :class="$style['cart-content__products']">
      <div :class="$style['cart-content__products__title']">
        Товары в корзине
      </div>
      <div
        v-if="getItemsCountInCart"
        :class="$style['cart-content__products__container']"
      >
        <CartProduct
          v-for="product in getItemsInCart"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
    <div :class="$style['cart-content__form']">
      <div :class="$style['cart-content__form__title']">Оформить заказ</div>
      <form @submit.prevent="onSubmit">
        <input
          v-model="name"
          type="text"
          :class="$style['cart-content__form__field']"
          placeholder="Ваше имя"
        />
        <input
          v-model="phone"
          v-mask="'+7 ### ###-##-##'"
          type="text"
          :class="$style['cart-content__form__field']"
          placeholder="Телефон"
        />
        <input
          v-model="address"
          type="text"
          :class="$style['cart-content__form__field']"
          placeholder="Адрес"
        />
        <input
          type="submit"
          value="Отправить"
          :class="$style['cart-content__form__button']"
        />
        <div v-if="alert" :class="$style['cart-content__form__alert']">
          {{ alert }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CartProduct from './CartProduct'

export default {
  name: 'CartContent',
  components: {
    CartProduct,
  },
  data() {
    return {
      name: '',
      phone: '',
      address: '',
      alert: '',
    }
  },
  computed: mapGetters({
    getItemsInCart: 'cart/getItemsInCart',
    getItemsCountInCart: 'cart/getItemsCountInCart',
  }),
  methods: {
    ...mapActions({
      sendRequest: 'cart/sendRequest',
      clearCart: 'cart/clearCart',
    }),
    onSubmit() {
      if (!this.name || !this.phone || !this.address) {
        this.alert = 'Заполните все поля❗'
      } else {
        this.name = ''
        this.phone = ''
        this.address = ''
        this.alert = ''
        this.sendRequest()
        this.clearCart()
      }
    },
  },
}
</script>

<style module lang="scss">
@import '../../assets/styles/config';

.cart-content {
  &__products {
    &__title {
      @include Title-secondary;
    }

    &__container {
      max-height: 400px;
      overflow-x: scroll;
      margin: 0px -16px;
      padding: 0px 16px;
      margin-bottom: 8px;
      padding-bottom: 12px;
    }
  }

  &__form {
    &__title {
      @include Title-secondary;
    }

    &__field {
      @include Field-primary;
    }

    &__button {
      @include Button-primary;
      margin-top: 18px;
    }

    &__alert {
      font-size: 16px;
      text-align: center;
      padding: 16px 0px;
    }
  }
}
</style>

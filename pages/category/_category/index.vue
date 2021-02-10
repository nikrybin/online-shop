<template>
  <div>
    <Cart />
    <Header />
    <MenuTop />
    <div :class="$style.container">
      <MenuLeft />
      <div :class="$style.container__items">
        <MainProduct
          v-for="product in getProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '../../../components/common/Header'
import MenuLeft from '../../../components/common/MenuLeft'
import MenuTop from '../../../components/common/MenuTop'
import MainProduct from '../../../components/product/MainProduct'
import Cart from '../../../components/cart/Cart'

export default {
  components: {
    Header,
    MenuLeft,
    MenuTop,
    MainProduct,
    Cart,
  },
  head() {
    return {
      title: 'Test List',
    }
  },
  computed: mapGetters({ getProducts: 'products/getProducts' }),
  mounted() {
    if (process.browser) {
      this.fetchCart()
    }
  },
  methods: mapActions({ fetchCart: 'cart/fetchCart' }),
}
</script>

<style module lang="scss">
.container {
  display: grid;
  grid-template-columns: 161px auto;
  width: 90%;
  max-width: 1264px;
  margin: 0 auto;

  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(264px, auto));
    justify-content: space-between;
  }
}
</style>

<template>
  <div>
    <ul :class="$style['menu-left__list']">
      <li
        v-for="category in getCategories"
        :key="category.id"
        :class="[
          $style['menu-left__list__item'],
          {
            [$style['menu-left__list__item_active']]:
              $route.params.category === category.id.toString(),
          },
        ]"
        @click="handleClick(category.id)"
      >
        <nuxt-link :to="`/category/${category.id}`">{{
          category.name
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MenuLeft',
  computed: mapGetters({ getCategories: 'categories/getCategories' }),
  methods: {
    ...mapActions({ fetchProducts: 'products/fetchProducts' }),
    handleClick(id) {
      this.fetchProducts(id)
    },
  },
}
</script>

<style module lang="scss">
@import '../../assets/styles/config';

.menu-left {
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;

    &__item {
      padding: 8px 0px 8px 0px;

      a {
        color: $text-color-thirdly;
        font-size: 16px;
        text-decoration: none;
        transition: color 250ms ease-out;

        &:hover {
          color: $text-color-secondary;
        }
      }

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        padding-bottom: 0;
      }

      &_active {
        a {
          text-decoration: underline;
          color: $text-color-primary;
        }
      }
    }
  }
}
</style>

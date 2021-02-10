<template>
  <div v-if="getItemsCountInCart" :class="$style.badge">
    <div :class="$style.badge__container">
      <div :class="$style.badge__number">
        {{ getItemsCountInCart }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Badge',
  computed: mapGetters({ getItemsCountInCart: 'cart/getItemsCountInCart' }),
}
</script>

<style module lang="scss">
@import '../../assets/styles/config';

.badge {
  height: 12px;
  width: 12px;
  background-color: $text-color-thirdly;
  border-radius: 50%;
  position: absolute;
  top: -2px;
  right: -2px;

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &__number {
    color: $background-color-primary;
    font-size: 8px;
    font-weight: bold;
  }
}
</style>

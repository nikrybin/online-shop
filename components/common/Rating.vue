<template>
  <div :class="$style.rating__container">
    <div>
      <Rating1 v-if="rating === 1" />
      <Rating2 v-else-if="rating === 2" />
      <Rating3 v-else-if="rating === 3" />
      <Rating4 v-else-if="rating === 4" />
      <Rating5 v-else-if="rating === 5" />
      <Rating0 v-else />
    </div>
    <div :class="$style.rating__number">{{ rating }}</div>
  </div>
</template>

<script>
import Rating0 from '../../assets/icons/rating0.svg'
import Rating1 from '../../assets/icons/rating1.svg'
import Rating2 from '../../assets/icons/rating2.svg'
import Rating3 from '../../assets/icons/rating3.svg'
import Rating4 from '../../assets/icons/rating4.svg'
import Rating5 from '../../assets/icons/rating5.svg'

export default {
  name: 'Rating',
  components: {
    Rating0,
    Rating1,
    Rating2,
    Rating3,
    Rating4,
    Rating5,
  },
  props: {
    rating: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    getRatingImage(rating) {
      return require(`../../assets/icons/rating${rating}.svg`)
    },
  },
}
</script>

<style module lang="scss">
@import '../../assets/styles/config';

.rating {
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__number {
    color: $rating-color-primary;
    font-size: 10px;
    padding: 0px 0px 4px 3px;
  }
}
</style>

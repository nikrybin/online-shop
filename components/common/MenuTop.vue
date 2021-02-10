<template>
  <div :class="$style['menu-top']">
    <div :class="$style['menu-top__container']">
      <div :class="$style['menu-top__title']">Каталог</div>
      <div :class="$style['menu-top__sort-by__container']">
        <div :class="$style['menu-top__sort-by__label']">Сортировать по:</div>
        <div :class="$style['menu-top__sort-by__dropdown']">
          <div :class="$style['menu-top__sort-by__dropdown__button']">
            {{ getTitle(getSortedBy.key) }}
            <Arrow
              :class="
                $style[
                  `menu-top__sort-by__dropdown__button__arrow_rotate-${getSortedBy.order}`
                ]
              "
            />
          </div>
          <div :class="$style['menu-top__sort-by__dropdown__content']">
            <div
              v-for="sortOption in getSortOptions"
              :key="sortOption.key"
              :class="$style['menu-top__sort-by__dropdown__option']"
              @click.prevent="handleOnClickSortBy(sortOption)"
            >
              {{ sortOption.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Arrow from '../../assets/icons/arrow.svg'

export default {
  name: 'MenuTop',
  components: {
    Arrow,
  },
  computed: mapGetters({
    getSortedBy: 'products/getSortedBy',
    getSortOptions: 'products/getSortOptions',
  }),
  methods: {
    ...mapActions({ sortProductsBy: 'products/sortProductsBy' }),
    getTitle(key) {
      return key === 'price' ? 'цене' : 'популярности'
    },
    handleOnClickSortBy(sortOption) {
      if (sortOption.key === this.getSortedBy.key) {
        this.sortProductsBy({
          key: sortOption.key,
          order: this.getSortedBy.order === 'asc' ? 'desc' : 'asc',
        })
      } else {
        this.sortProductsBy({
          key: sortOption.key,
          order: 'desc',
        })
      }
    },
  },
}
</script>

<style module lang="scss">
@import '../../assets/styles/config';

.menu-top {
  height: 97px;

  &__container {
    height: 100%;
    width: 90%;
    max-width: 1264px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    @include Title-primary;
  }

  &__sort-by {
    &__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }

    &__label {
      font-size: 16px;
      color: $text-color-primary;
      margin-right: 6px;
    }

    &__dropdown {
      &__button {
        font-size: 16px;
        color: $text-color-secondary;
        padding: 6px 0px;

        &:hover {
          cursor: pointer;

          & ~ .menu-top__sort-by__dropdown__content {
            display: block;
          }
        }

        &__arrow {
          &_rotate {
            &-asc {
              transform: rotate(180deg) translateY(100%);
              fill: $text-color-secondary;
            }

            &-desc {
              transform: rotate(0deg) translateY(-50%);
              fill: $text-color-secondary;
            }
          }
        }
      }

      &__content {
        position: absolute;
        background-color: $background-color-primary;
        box-shadow: $box-shadow-primary;
        z-index: 1;
        padding: 8px 0px;
        right: 0;
        border-radius: 8px;
        width: 100%;
        max-width: 161px;
        display: none;

        &:hover {
          display: block;
        }
      }

      &__option {
        padding: 4px 12px;
        color: $text-color-thirdly;
        font-size: 14px;
        font-weight: 400;
        background-color: $background-color-primary;
        transition: background-color 250ms ease-out, color 250ms ease-out;

        &:hover {
          background-color: $background-color-secondary;
          color: $text-color-primary;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

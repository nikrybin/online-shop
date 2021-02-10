<template>
  <div :class="$style['cart-success']">
    <div :class="$style['cart-success__image']">
      <Ok />
    </div>
    <div :class="$style['cart-success__title']">Заявка успешно отправлена</div>
    <div :class="$style['cart-success__subtitle']">
      Вскоре наш менеджер свяжется с Вами
    </div>
  </div>
</template>

<script>
import Ok from '../../assets/icons/ok.svg'

export default {
  name: 'CartSuccess',
  components: {
    Ok,
  },
}
</script>

<style module lang="scss">
@import '../../assets/styles/config';

.cart-success {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50%;

  &__title {
    font-size: 24px;
    font-weight: 700;
    color: $text-color-primary;
    padding: 20px 0px 4px 0px;
  }

  &__subtitle {
    font-size: 16px;
    font-weight: 400;
    color: $text-color-secondary;
  }
}
</style>

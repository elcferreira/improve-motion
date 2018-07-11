<template>
  <transition duration="1200" name="layout" appear>
    <div class="layout">
      <i class="layout__side layout__side-top"></i>
      <i class="layout__side layout__side-left"></i>
      <the-header />
      <the-days />
      <the-options />
      <the-footer />
    </div>
  </transition>
</template>


<script>

  // components Basic
import TheHeader from './components/TheHeader.vue'
import TheDays from './components/TheDays.vue'
import TheOptions from './components/TheOptions.vue'
import TheFooter from './components/TheFooter.vue'

  export default {
    components: {
      TheHeader, TheDays, TheOptions, TheFooter
    }
  }


</script>

<style lang="stylus">
  // resets
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700')
  @import './assets/style/function'
  @import './assets/style/reset'

  html, body
    width 100%
    height 100%

  body
    font-family 'Roboto', sans-serif

  .layout
    &__side
      background-color #b1b1b1
      position absolute
      top 0
      left 0

      &-top
        width 100%
        height 2em
        transform-origin left center

      &-left
        width 2em
        height 100%
        transform-origin center top

    &-enter, &-appear
      &-active
        & ^[0]__side-top
          transition-timing-function $ease
          transition-duration getDuration(5)
        & ^[0]__side-left
          transition-timing-function $ease
          transition-duration getDuration(7)

      & ^[0]__side-top
        transform translateY(-100%)

      & ^[0]__side-left
        transform translateX(-100%)

      &-to
        & ^[0]__side-top
          transform translateY(0%)
        & ^[0]__side-left
          transform translateX(0%)


  // type
  .bold
    font-weight 700

  .fz-16
    font-size 1.6em

  .fz-20
    font-size 2em

  .fz-35
    font-size 3.5em

  .fz-150
    font-size 15em

</style>

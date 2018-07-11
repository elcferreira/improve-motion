<template>
  <transition  duration="1200" name="days" mode="out-in" appear>
    <ul class="days">
      <li class="days__item fz-150">Day 1.</li>
      <li class="days__item fz-150">Day 2.</li>
    </ul>
  </transition>
</template>

<style lang="stylus">
  @import '../assets/style/function'

  .days
    width 100%
    display flex
    overflow hidden
    padding 5em 6em 0 7em

    &__item
      list-style none
      width 85%
      flex-shrink 0
      display block

    &-enter
      &-active
        & ^[0]__item
          for i in (1..3)
            &:nth-child({i})
              transition getDuration(i, .09) $ease

      & ^[0]__item
        transform translateY(35px)
        opacity 0

      &-to
        & ^[0]__item
          transform translateY(0px)
          opacity 1


</style>

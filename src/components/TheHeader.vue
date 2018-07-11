<template>
  <transition name="header" duration="1000" appear>
    <header class="header">
      <span class="header__intro bold fz-16">One Minimal Festival</span>
      <a href="#" title="get tickets" class="header__button fz-20">Get tickets!</a>
    </header>
  </transition>
</template>

<style lang="stylus">
  @import '../assets/style/function'
  .header
    display flex
    justify-content space-between
    top 0
    left 0
    width 100%
    padding 5em 3em 0 7em

    &__button
      position relative
      &:after
        content ''
        width 100%
        height 2px
        background-color #000
        position absolute
        left 0
        bottom -.1em

    &-enter
      &-active
        & ^[0]__intro, & ^[0]__button
          transition-timing-function $ease
        & ^[0]__intro
          transition-duration getDuration(1)
        & ^[0]__button
          transition-duration getDuration(3)


      & ^[0]__intro, & ^[0]__button
        transform translateY(40px)
        opacity 0

      &-to
        & ^[0]__intro, & ^[0]__button
          transform translateY(0px)
          opacity 1
</style>

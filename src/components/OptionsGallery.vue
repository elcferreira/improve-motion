<template>
  <div class="options-gallery">
    <figure class="options-gallery__figure" v-for="(image, i) in images" :key="i">
      <div class="options-gallery__image" :style="{ backgroundImage: 'url(' + image + ')'}" />
    </figure>
  </div>
</template>

<script>
export default {
  props: [ 'images' ]
}
</script>

<style lang="stylus">
  @import '../assets/style/function'

  .options-gallery
    visibility hidden
    opacity 0
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    z-index 2
    background-color alpha(#fff, .7)
    transition .32s $ease

    &__figure
      width 30em
      height 20em
      position absolute
      transform translateY(40px)
      opacity 0
      transition-duration .32s 
      transition-timing-function $ease
     
    &__image
      position absolute
      width 100%
      height 100%
      left 0
      top 0
      background-size cover

    &--Cinema
      & ^[0]__figure
        &:nth-child(1)
          top 10%
          right 30%
        &:nth-child(2)
          bottom 10%
          right 15%
        &:nth-child(3)
          top 35%
          right 4%
        &:nth-child(4)
          top 15%
          right 60%
        &:nth-child(5)
          bottom 05%
          left 10%
        &:nth-child(6)
          top 44%
          right 39%

    &--Art
      & ^[0]__figure
        &:nth-child(1)
          top 4%
          right 16%
        &:nth-child(2)
          bottom 10%
          right 15%
        &:nth-child(3)
          top 35%
          right 4%
        &:nth-child(4)
          top 6%
          right 66%
        &:nth-child(5)
          bottom 3%
          left 18%
        &:nth-child(6)
          top 44%
          left 0%

  // motion
  .options__wrapper
    &:hover, &:focus
      & + .options-gallery
        .options-gallery
          &__figure
            transform translateY(0)
            opacity 1
            will-change transform, opacity
            for i in (1..6)
              &:nth-child({i})
                transition-duration getDuration(i, .09)


</style>

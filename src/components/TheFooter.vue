<template>
  <transition name="footer" appear duration="2000">
    <footer class="footer">
      <span class="footer__date fz-20">{{date}}</span>
      <aside class="footer__aside">
        <ul class="footer__categories">
          <li class="footer__category motion-item fz-20" v-for="category in categories">{{category}}</li>
        </ul>
        <ul class="footer__location">
          <li class="footer__location-item motion-item fz-20" v-for="local in locations">{{local}}</li>
        </ul>
      </aside>
      <span class="footer__copyright">{{copyright}}</span>
    </footer>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      date: '15-16 of April',
      categories: [
        'Cinema', 'Art', 'Music', 'Design'
      ],
      locations: [
        'Paris', 'Hamburg', 'Melburn'
      ],
      copyright: 'Just love and enjoy your life'
    }
  }
}
</script>

<style lang="stylus">
  @import '../assets/style/function'

  .footer
    position fixed
    left 0
    bottom 0
    width 100%
    padding 0 5em 3em 7em

    &__date
      display block
      text-transform uppercase

    &__aside
      width 100%
      padding 2em 0 0 0
      display flex
      justify-content space-between
      align-items flex-end

    &__categories
      width 23em
      display flex
      flex-wrap wrap

    &__category
      text-transform uppercase
      list-style none
      padding 0 2em 0 0
      position relative

      &:last-child
        &:after
          display none

      &:after
        content ''
        width 1.5em
        height 1px
        background-color #000
        position absolute
        right .2em
        top 50%

    &__location
      display flex

      &-item
        text-transform uppercase
        list-style none
        padding 0 2em 0 0
        position relative

        &:last-child
          padding 0 1em 0 0
          &:after
            display none

        &:after
          content ''
          width 1.5em
          height 1px
          background-color #000
          position absolute
          right .2em
          top 50%

    &__copyright
      position absolute
      right 3em
      bottom 3em
      transform-origin left center
      transform translateX(100%) rotate(-90deg)


    // motion
    &-appear, &-enter
      &-active
        & ^[0]__date
          transition getDuration(2) $ease
          transition-delay .35s
        & ^[0]__copyright
          transition getDuration(4) $ease
          transition-delay .30s
        .motion-item
          transition-timing-function $ease
          transition-delay .45s
          for i in (1..4)
            &:nth-child({i})
              transition-duration getDuration(i)

      .motion-item
        transform translateX(-30px)
        opacity 0

      & ^[0]__copyright
        transform translateX(100%) translateY(30px) rotate(-90deg)
        opacity 0

      & ^[0]__date
        transform translateX(-40px)
        opacity 0
        
      &-to
        .motion-item
          transform translateX(0)
          opacity 1

        & ^[0]__copyright
          transform translateX(100%) translateY(0) rotate(-90deg)
          opacity 1

        & ^[0]__date
          transform translateX(0)
          opacity 1



</style>

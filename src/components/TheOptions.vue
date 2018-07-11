<template>
  <transition duration="1000" name="options" appear>
    <section class="options">
      <ul class="options__list">
        <li class="options__item " v-for="(option, key) in options" :key="key" >
          <div class="options__wrapper fz-16" tabindex="0">
            <h3 class="options__title fz-35 motion-item">{{ option.title }}</h3>
            <span class="options__time motion-item">{{ option.time }}</span>
            <strong class="options__description motion-item">{{ option.description }}</strong>
            <span class="options__author motion-item">{{ option.author }}</span>
          </div>
          <options-gallery :class="'options-gallery--' + option.title" v-if="option.images" :images="option.images" />
        </li>
      </ul>   
    </section>
  </transition>
</template>

<script>
import OptionsGallery from './OptionsGallery.vue'

export default {
  components: {
    OptionsGallery
  },
  data () {
    return {
      options: [
        {
          title: 'Cinema',
          time: '10:00 - 12:00',
          description: 'The Wather of Fear',
          author: 'Henrry Draus',
          images: [
            'https://qph.fs.quoracdn.net/main-qimg-a069d7d2228d4ddf08b5905d995e4315',
            'https://www.fluentu.com/blog/french/wp-content/uploads/sites/3/2017/10/french-cult-films-7-e1507718358978.jpg',
            'https://s-media-cache-ak0.pinimg.com/736x/59/c6/eb/59c6eb63d7d9e6a801a68a639ea31393.jpg',
            'https://i.pinimg.com/originals/32/f0/72/32f0721cedf6767264a691b487f75a70.jpg',
            'http://www.frankenmuthbrewery.com/blog/wp-content/uploads/2013/10/beermovies1.jpg',
            'https://www.indiewire.com/wp-content/uploads/2014/01/white-people-in-movie-theater.com-79937.jpg?w=500'
          ]
        },
        {
          title: 'Art',
          time: '12:00 - 13:00',
          description: 'Public Opening',
          author: 'Rebbeca Benise',
          images: [
            'http://static.messynessychic.com/wp-content/uploads/2017/06/10-alphonse-mucha-1860to1939-designed-velveteen-cushion-printed-messrs-hine-stroud-co-c1899to1900.jpg',
            'https://www.daytonlocal.com/images/blog/alphonse-mucha-master-of-art-nouveau.jpg',
            'https://i.pinimg.com/736x/de/42/a5/de42a5e4a2124ae32ce16d84468decdd.jpg',
            'http://designices.com/wp-content/uploads/2012/08/construtivismo-russo16.jpg',
            'http://designices.com/wp-content/uploads/2012/08/construtivismo-russo20.jpg',
            'http://obviousmag.org/archives/uploads/2011/04/06/ZZ27442F8E.jpg'
          ]
        },
        {
          title: 'Music',
          time: '12:00 - 16:00',
          description: 'The July First',
          author: 'Rubert Heloi'
        },
        {
          title: 'Design',
          time: '15:00 - 17:00',
          description: 'Our side of reason',
          author: 'Rebbeca Benise'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
  @import '../assets/style/function'

  .options
    &__list
      display flex
      padding 6em 2em 0 7em

    &__item
      list-style none
      flex 1
      cursor pointer

    &__time, &__description, &__author
      display block

    &__title
      padding 0 0 .3em

    &__description
      padding 1.3em 0

    &__wrapper
      position relative
      z-index 3
      &:hover, &:focus
        & + .options-gallery
          visibility visible
          opacity 1


    &:hover
      & ^[0]__item
        opacity .5
        z-index 1
        &:hover
          opacity 1
          z-index 2

    &-enter, &-appear
      &-active
        & ^[0]__item
          transition-delay .32s
          transition-timing-function $ease
          will-change transform, opacity
          backface-visibility hidden
          transform-style preserve-3d
          for i in (1..4)
            &:nth-child({i})
              transition-duration getDuration(i) 

      & ^[0]__item
        transform translateY(40px)
        opacity 0

      &-to
        & ^[0]__item
          transform translateY(0)
          opacity 1
</style>

<template>
  <div class="book-reader">
    <h2 class="book-title">{{ $singleBook.title }}</h2>
    <div class="gallery-container">
      <!-- Thumb Nails aqui -->
      <div class="swiper-container gallery-thumbs">
        <div class="swiper-wrapper">
          <div
            v-for="page in $singleBook.pages"
            :key="page.id"
            class="swiper-slide"
          >
            <img src="@/assets/img/page.svg" alt="página" />
            <span class="center">{{ page.pageNumber }}</span>
          </div>
        </div>
      </div>

      <!-- Páginas aqui -->
      <div class="swiper-container gallery-main">
        <div class="swiper-wrapper">
          <div
            v-for="page in $singleBook.pages"
            :key="page.id"
            class="swiper-slide page"
            v-html="page.text"
          ></div>
        </div>
      </div>
    </div>

    <!--Setas aqui -->
    <div class="buttons">
      <div class="swiper-button-unique-prev">
        <img src="~/assets/img/arrow.svg" />
      </div>
      <div class="swiper-button-unique-next">
        <img id="right-arrow" src="~/assets/img/arrow.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { books } from '@/store'
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/swiper-bundle.min.js'

export default Vue.extend({
  computed: {
    $singleBook() {
      return books.$single
    },
  },
  mounted() {
    const galleryThumbs = new Swiper('.gallery-thumbs', {
      breakpoints: {
        992: {
          direction: 'vertical',
          slidesPerView: 4,
        },
      },
      spaceBetween: 15,
      centeredSlides: false,
      centeredSlidesBounds: true,
      slidesPerView: 2,
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      direction: 'horizontal',
    })
    const galleryMain = new Swiper('.gallery-main', {
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      preventInteractionOnTransition: true,
      navigation: {
        nextEl: '.swiper-button-unique-next',
        prevEl: '.swiper-button-unique-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    })
    galleryMain.on('slideChangeTransitionStart', () => {
      galleryThumbs.slideTo(galleryMain.activeIndex)
    })
    galleryThumbs.on('transitionStart', () => {
      galleryMain.slideTo(galleryThumbs.activeIndex)
    })
  },
})
</script>

<style lang="scss" scoped>
.center {
  text-align: center;
}
.book-reader {
  .book-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  .buttons {
    display: grid;
    grid-template-columns: repeat(2, 2.738rem);
    grid-template-rows: 2rem;
    grid-gap: 0.22rem;
    justify-content: end;
    margin-top: 0.6rem;
    .swiper-button-unique {
      &-prev,
      &-next {
        background: color(dark, darkest);
        display: grid;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      &-next #right-arrow {
        transform: rotate(180deg);
      }
    }
  }
}
.gallery-container {
  height: 879px;
  display: grid;
  grid-template-columns: 148px 1fr;
  grid-gap: 2rem;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
    height: auto;
  }
}
.gallery-main {
  width: 100%;
  height: 100%;
  box-shadow: -1px 3px 21px 1px rgba(0, 0, 0, 0.12);
  border: 1px solid #e9e9e9;
  .page {
    padding: 4rem 3rem 3rem;
    line-height: 1.625rem;
    cursor: grabbing;
  }
}
.gallery-thumbs {
  margin: 0 !important;
  height: 100%;
  .swiper-wrapper {
    display: grid;
    grid-auto-flow: row;
    @include screen('small', 'medium') {
      grid-auto-flow: column;
    }
  }
  .swiper-slide {
    width: 100%;
    height: 206px;
    border: 1px solid color(dark, darkest);
    background: #ffffff;
    cursor: pointer;
    display: grid;
    justify-content: center;
    align-items: center;
    img {
      transition: 0.3s;
    }
    &:hover {
      border: 3px solid color(dark, darkest);
    }
    &-thumb-active {
      border: 3px solid color(dark, darkest);
    }
  }
}
.swiper-button-disabled {
  opacity: 0.38;
}
</style>

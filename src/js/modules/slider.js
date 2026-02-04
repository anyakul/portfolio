import Swiper, {Navigation, Pagination, Autoplay, EffectFade, Thumbs, Grid} from 'swiper';

export function slider() {
  Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Thumbs, Grid]);
  const portfolioSwiper = new Swiper('.portfolio_slider', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: false,
    observeParents: true,
    watchOverflow: true,
    spaceBetween: 10,
    init: false,
    navigation: {
      nextEl: '.portfolio_button-next',
      prevEl: '.portfolio_button-prev',
    },
    pagination: {
      el: '.portfolio_pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 8,
    },
  })

  if (window.innerWidth < 768) {
    portfolioSwiper.init();
  }
  /*const teamSwiper = new Swiper('.team-slider', {
    direction: 'horizontal',
    slidesPerView: 4,
    slidesPerColumn: 2,
    grid: {
      enabled: true,
      fill: 'row',
      rows: 2
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        slidesPerColumn: 2,
      },
      768: {
        slidesPerView: 3,
        slidesPerColumn: 2,
      },
      320: {
        slidesPerView: 2,
        slidesPerColumn: 2,
      }
    }
  })*/
}

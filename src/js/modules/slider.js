import Swiper, {Navigation, Pagination, Autoplay, EffectFade, Thumbs, Grid} from 'swiper';

export function slider() {
  Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Thumbs, Grid]);
  const swiper = new Swiper('.portfolio_slider', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: false,
    observeParents: true,
    watchOverflow: true,
    spaceBetween: 10,
    init: false,
    watchOverflow: true,
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
    swiper.init();
  }

  //portfolioButtons = document.querySelector('.portfolio_nav-buttons');

  /*if (portfolioSwiper.slidesPerViewDynamic.length == 1) {
    portfolioButtons.addEventL
  }*/
}

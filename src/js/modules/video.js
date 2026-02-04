export function video() {
  const videoContainer = document.querySelectorAll('[data-video="block"]');

  for (let i = 0; i < videoContainer.length; i++) {
    const videoWrapper = videoContainer[i].querySelector('[data-video="button"]');
    const video = videoContainer[i].querySelector('[data-video="video"]');

    if (video) {
      videoContainer[i].classList.remove('is-nojs');
      videoWrapper.addEventListener('click', () => {
        if (video.paused) {
          video.play();
          videoContainer[i].classList.add('is-play');
        } else {
          video.pause();
          videoContainer[i].classList.remove('is-play');
          video.load();
        }
      });
    }
  }
}

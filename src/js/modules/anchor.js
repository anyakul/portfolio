export function anchor() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((anchor) => {
    let offsetPosition = -400; // Расстояние от верхнего края окна до блока

    if (anchor.getAttribute('href') != "#") {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        const targetOffsetTop = targetElement.offsetTop - offsetPosition;

        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth'
        });
      });
    }
  });
}

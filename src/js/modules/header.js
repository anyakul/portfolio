export function header() {
  const headerButton = document.querySelector(".header_menu-button");
  const headerContainer = document.querySelector(".header");
  if (headerButton) {
    headerButton.addEventListener('click', function (e) {
      if (headerContainer.classList.contains("header--active")) {
        headerContainer.classList.remove("header--active");
        document.body.classList.remove('scroll-lock');
        deleteEvents();
      } else {
        headerContainer.classList.add("header--active");
        document.body.classList.add('scroll-lock');
        addEvents();
      }
    })
  
    const addEvents = function () {
      window.addEventListener("click", closeOverlay);
      window.addEventListener("keydown", closeByEsc);
      setTimeout(deleteEvents, 0.1);
    }
  
    const deleteEvents = function () {
      window.removeEventListener("click", closeOverlay);
      window.removeEventListener("keydown", closeByEsc);
      setTimeout(addEvents, 0.1);
    }
  
    const closeByEsc = function (e) {
      if (e.keyCode == 27) {
        if (headerContainer.classList.contains("header-active")) {
          headerContainer.classList.remove("header-active");
          if (window.innerWidth < 768) {
            document.body.classList.remove('scroll-lock');
          }
        }
      }
    }
  
    const closeOverlay = function (e) {
      if (!e.target.closest(".header-active")) {
        if (headerContainer.classList.contains("header-active")) {
          headerContainer.classList.remove("header-active");
          if (window.innerWidth < 768) {
            document.body.classList.remove('scroll-lock');
          }
        }
      }
    }
  }
}

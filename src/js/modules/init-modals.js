import {Modals} from './modals.js';

let modals;

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    resetScrollPos: false,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: false,
  },
  // modal_1, modal_6 добавлен исключительно для примера при добавлении на проект ключ и обект записанный в нём нужно удалить
  'modal_1': {
    openCallback: () => ('Я отработаю при открытии modal_1'),
    closeCallback: () => ('Я отработаю при закрытии modal_1'),
  },
};

const initModals = () => {
  const modalElements = document.querySelectorAll('.modal');
  if (modalElements.length) {
    modalElements.forEach((el) => {
      setTimeout(() => {
        el.classList.remove('modal_-preload');
      }, 100);
    });
  }

  modals = new Modals(settings);
  // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда
  window.modals = modals;
};

export {modals, initModals};

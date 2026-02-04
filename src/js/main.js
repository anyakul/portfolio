import * as btnUp from './modules/btn-up.js';
import * as anchor from './modules/anchor.js';
import * as header from './modules/header.js';
import * as slider from './modules/slider.js';
import * as video from './modules/video.js';
import * as initPhoneMask from './modules/phone-mask.js';
import * as form from './modules/form.js';
import {initModals} from './modules/init-modals.js';
import * as tabs from './modules/tabs.js';

anchor.anchor();
btnUp.btnUp.addEventListener();
header.header();
slider.slider();
video.video();
initPhoneMask.initPhoneMask();
form.form();
tabs.tabs();

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initModals();
  });
});

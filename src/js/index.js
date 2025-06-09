import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { Keyboard } from 'swiper/modules';
//modal

let btnIntensive = document.querySelector('#btnIntensive');
let linkVisa = document.querySelector('#linkVisa');
let linkCity = document.querySelector('#linkCity');
let modalIntensive = document.querySelector('#modal-intensive');
let modalVisa = document.querySelector('#modal-visa');
let modalCity = document.querySelector('#modal-city');
let closeIntensive = document.querySelector('#closeIntensive');
let closeCity = document.querySelector('#closeCity');
let closeVisa = document.querySelector('#closeVisa');

function modalOpen(linkCity, modalCity) {
  linkCity.addEventListener('click', event => {
    modalCity.classList.add('open');
    event.preventDefault();
  });
}

function modalClose(modalCity, closeCity) {
  closeCity.addEventListener('click', event => {
    if (modalCity.classList.contains('open')) {
      modalCity.classList.remove('open');
    }
  });
}

modalOpen(linkCity, modalCity);
modalClose(modalCity, closeCity);

modalOpen(linkVisa, modalVisa);
modalClose(modalVisa, closeVisa);

modalOpen(btnIntensive, modalIntensive);
modalClose(modalIntensive, closeIntensive);

//burger (ease)
let burger = document.querySelector('.burger__close');
let hero = document.querySelector('#hero');
let btnMenu = document.querySelector('#burgerMenu');
let btnCross = document.querySelector('#burgerCross');

function openMenu() {
  btnMenu.addEventListener('click', event => {
    if (burger.classList.contains('close')) {
      burger.classList.remove('close');
      hero.classList.add('close');
      btnMenu.classList.add('close');
      btnCross.classList.remove('close');
    }
  });
}

function closeMenu() {
  btnCross.addEventListener('click', event => {
    burger.classList.add('close');
    hero.classList.remove('close');
    btnMenu.classList.remove('close');
    btnCross.classList.add('close');
  });
}

openMenu();
closeMenu();

//перехід за посилання натиском кнопки
let btnTelegram = document.querySelector('#btnTelegram');
btnTelegram.addEventListener('click', event => {
  window.open('https://web.telegram.org/', '_blank');
});

//swiper
const swiperCommunication = new Swiper('.communication__swiper', {
  modules: [Navigation, Keyboard],

  navigation: {
    nextEl: '.swiper-communication__btn_next',
    prevEl: '.swiper-communication__btn_prev',
  },

  loop: true,
  grabCursor: true,

  keyboard: {
    enabled: true,
  },
});

const swiperReview = new Swiper('.swiper-review', {
  modules: [Navigation, Keyboard],

  navigation: {
    nextEl: '.review__button_next',
    prevEl: '.review__button_prev',
  },
  spaceBetween: 16,
  loop: true,
  slidesPerView: 1.15,
  grabCursor: true,

  keyboard: {
    enabled: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2.1,
    },
  },
});

const swiperWebinar = new Swiper('.webinar__swiper', {
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.webinar__btn_next',
    prevEl: '.webinar__btn_prev',
  },
  spaceBetween: 16,
  loop: true,
  grabCursor: true,

  keyboard: {
    enabled: true,
  },

  slidesPerView: 1.41,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});

const arr = [1, 2, 5, 3, 2, 5, 66454, 532354, 753345];
let a = [];

arr.forEach((item, index) => {
  arr.forEach((element, index2) => {
    if (item === element && index !== index2) {
      if (!a.includes(element)) {
        a.push(element);
      }
    }
  });
});
console.log(a);

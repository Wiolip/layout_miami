'use strict';

const contactForm = document.querySelector('.form');

// @ts-ignore
contactForm.addEventListener('submit', function (event) {

  event.preventDefault();
  this.reset();
});

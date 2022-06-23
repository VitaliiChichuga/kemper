import {
  galleryFirst,
  gallerySecond,
  galleryThird,
  galleryFourth,
  galleryFifth,
} from './app.js';

const refs = {
  link: document.getElementById('first'),
  link2: document.getElementById('second'),
  link3: document.getElementById('third'),
  link4: document.getElementById('fourth'),
  link5: document.getElementById('fifth'),
};

function getValue(array, key) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    res[array[i][key]] = array[i];
  }
  return res;
}

refs.link.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.id === 'first') {
    Fancybox.show(galleryFifth, 'src');
  }
});

refs.link2.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.id === 'second') {
    Fancybox.show(gallerySecond, 'src');
  }
});
refs.link3.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.id === 'third') {
    Fancybox.show(galleryThird, 'src');
  }
});
refs.link4.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.id === 'fourth') {
    Fancybox.show(galleryFourth, 'src');
  }
});
refs.link5.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.id === 'fifth') {
    Fancybox.show(galleryFifth, 'src');
  }
});

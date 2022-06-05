import { gallery, gallery2, gallery3, gallery4 } from './app.js';

const refs = {
  link: document.querySelector('.open'),
  link2: document.querySelector('.two'),
  link3: document.querySelector('.three'),
  link4: document.querySelector('.four'),
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

  if (event.target.className === 'open') {
    Fancybox.show(gallery, 'src');
  }
});

refs.link2.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.className === 'two') {
    Fancybox.show(gallery2, 'src');
  }
});
refs.link3.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.className === 'three') {
    Fancybox.show(gallery3, 'src');
  }
});
refs.link4.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.className === 'four') {
    Fancybox.show(gallery4, 'src');
  }
});

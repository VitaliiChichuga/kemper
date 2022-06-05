import { gallery, gallery2 } from './app.js';

const refs = {
  link: document.querySelector('.open'),
  link2: document.querySelector('.two'),
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

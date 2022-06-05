import gallery from './app.js';
import gallery2 from './app2.js';

const refs = {
  link: document.querySelector('.open', '.open2'),
  // aaa: document.querySelector(),
};

// refs.link.addEventListener('click', event => {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   console.log(event.target);
//   Fancybox.show(gallery);
// });
refs.link.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.className === 'open') {
    Fancybox.show(gallery);
  }

  if (event.target.className === 'open2') {
    Fancybox.show(gallery2);
  }
});
refs.aaa.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.className === 'open2') {
    Fancybox.show(gallery2);
  }
});

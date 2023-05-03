import {
  galleryFirst,
  gallerySecond,
  galleryThird,
  galleryFourth,
  galleryFifth,
} from './app.js';

const solutionsPageWork = document.querySelector('.solutions__page-work');
solutionsPageWork.addEventListener('click', e => {
  e.preventDefault;
  console.log(e.target);
  if (e.target.classList.contains('one')) {
    Fancybox.show(galleryFifth, 'src');
  }
  if (e.target.classList.contains('two')) {
    Fancybox.show(gallerySecond, 'src');
  }
});

// const refs = {
//   link: document.getElementById('first'),
//   link2: document.getElementById('second'),
//   link3: document.getElementById('third'),
//   link4: document.getElementById('fourth'),
//   link5: document.getElementById('fifth'),
// };

// refs.link.addEventListener('click', event => {
//   event.preventDefault();

//   if (event.target.id === 'first') {
//     Fancybox.show(galleryFifth, 'src');
//   }
// });

// refs.link2.addEventListener('click', event => {
//   event.preventDefault();

//   if (event.target.id === 'second') {
//     Fancybox.show(gallerySecond, 'src');
//   }
// });
// refs.link3.addEventListener('click', event => {
//   event.preventDefault();

//   if (event.target.id === 'third') {
//     Fancybox.show(galleryThird, 'src');
//   }
// });
// refs.link4.addEventListener('click', event => {
//   event.preventDefault();

//   if (event.target.id === 'fourth') {
//     Fancybox.show(galleryFourth, 'src');
//   }
// });
// refs.link5.addEventListener('click', event => {
//   event.preventDefault();

//   if (event.target.id === 'fifth') {
//     Fancybox.show(galleryFifth, 'src');
//   }
// });

import Glide from '@glidejs/glide';
import { refs } from './js/refs';

import { queryToAPI } from './js/queryToAPI';
import { getTrending } from './js/markupTrending';


// const glideTrending = new Glide('.glide', {
//   type: 'carousel',
//   startAt: 0,
//   perView: 6,
//   autoplay: 1700,
//   hoverpause: true,
//   bound: true,
//   });


// const querytoapi = new queryToAPI();
getTrending();

// async function getTrending() {
//   try {
//     const { results } = await querytoapi.fetchTrending();

//     createMarkupTrending(results);
      
//   } catch (error) {
//     console.log(error);
//   }
// }

// function createMarkupTrending(results) {
//     const markup = results.map(({ poster_path,title, release_date }) => {
//             let imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
//             return /*html*/ `
//     <li class="glide__slide">
//         <img
//         class="glide-slide__img"
//         src="${imageUrl}"
//         alt="${title}"
//         width="124px"
// 		    height ="180px"
//       />
//     </li>`
//   ;
//         })
//         .join('');

//   refs.carousel.innerHTML = markup;
//   glideTrending.mount();

// }



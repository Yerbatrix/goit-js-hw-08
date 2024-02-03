import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

const fixedGalleryItems = galleryItems
  .map(
    galleryItem =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}" 
        alt="${galleryItem.description}"
        data-source="${galleryItem.original}"
        >
        </img>
        </a>
     </div>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', fixedGalleryItems);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 200,
  captionPosition: 'bottom',
});
console.log(galleryItems);

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListItem = document.querySelector('.gallery');
const createList = createListItem(galleryItems);

function createListItem(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="" title="${description}"/>
</a>`
    )
    .join('');
}
galleryListItem.insertAdjacentHTML('beforeend', createList);

let gallery = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionDelay: 250,
});

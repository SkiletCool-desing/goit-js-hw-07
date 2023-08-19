import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryElement = document.querySelector(".gallery");
const markup = createElement(galleryItems);

function createElement(galleryItems) {
  return galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`,
    ""
  );
}

galleryElement.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
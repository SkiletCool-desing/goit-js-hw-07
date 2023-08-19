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
galleryElement.addEventListener("click", onClick);
const instance = basicLightbox.create(`
    <img src="" width="" height="">
`);

function onClick(e) {
  e.preventDefault();
  const dataSetSource = e.target.dataset.source;
  if (!dataSetSource) return;
  instance.element().querySelector("img").src = dataSetSource;
  instance.show();
}

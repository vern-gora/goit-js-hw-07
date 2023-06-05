import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");

const galleryItemsEl = galleryItems
  .map(({ preview, original, description }) => {
    let galleryList = `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`;
    return galleryList;
  })
  .join("");

galleryListEl.insertAdjacentHTML("beforeend", galleryItemsEl);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

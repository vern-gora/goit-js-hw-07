import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const markup = galleryItems.map((item) => {
  const galleryItemEl = document.createElement("li");
  galleryItemEl.classList.add("gallery__item");
  const galleryLinkEl = document.createElement("a");
  galleryLinkEl.classList.add("gallery__link");
  galleryItemEl.append(galleryLinkEl);
  galleryLinkEl.href = item.original;
  const galleryImgEl = document.createElement("img");
  galleryImgEl.classList.add("gallery__image");
  galleryLinkEl.append(galleryImgEl);
  galleryImgEl.src = item.preview;
  galleryImgEl.setAttribute("data-source", item.original);
  galleryImgEl.alt = item.description;
  return galleryItemEl;
});
galleryEl.append(...markup);

galleryEl.addEventListener("click", selectImg);
function selectImg(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
}
galleryEl.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    instance.close();
  }
});

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const markup = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
                />
            </a>
        </li>`;
  })
  .join("");
galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", selectImg);
function selectImg(event) {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const instance = basicLightbox.create(
      `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
      {
        onShow: () => {
          document.addEventListener("keyup", closeEsc);
        },
        onClose: () => {
          document.removeEventListener("keyup", closeEsc);
        },
      }
    );
    instance.show();
    function closeEsc(event) {
      if (event.key === "Escape") {
        instance.close();
      }
    }
  }
}

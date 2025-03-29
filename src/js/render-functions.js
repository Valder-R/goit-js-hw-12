// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

export function clearGallery() {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
};

export function showLoader(){
    const loader = document.querySelector(".loader");
    loader.classList.add("load")
};

export function hideLoader(){
    const loader = document.querySelector(".loader");
    loader.classList.remove("load")
};
let gallery_images;
export default function addImages(data, page) {
    const gallery = document.querySelector(".gallery");
    const markup = data
        .map((el) =>
            `<li class="gallery-item">
                <div class="image-container">
                    <a class="gallery-link" href="${el.largeImageURL}">
                        <img
                        class="gallery-image"
                        src="${el.webformatURL}"
                        data-source="${el.largeImageURL}"
                        alt="${el.tags}"
                        />
                    </a>
                </div>
                <ul class="info">
                    <li class="info-item">
                        <p class="info-tag">Likes</p>
                        <p>${el.likes}</p>
                    </li>
                    <li class="info-item">
                        <p class="info-tag">Views</p>
                        <p>${el.views}</p>
                    </li>
                    <li class="info-item">
                        <p class="info-tag">Comments</p>
                        <p>${el.comments}</p>
                    </li>
                    <li class="info-item">
                        <p class="info-tag">Downloads</p>
                        <p>${el.downloads}</p>
                    </li>
                </ul>
            </li >`
        )
        .join("");
    
    if (page > 1) {
        gallery_images.destroy();
    }
    gallery.insertAdjacentHTML("beforeend", markup)
    gallery_images = new SimpleLightbox('.gallery a');
    gallery_images.refresh();
} 

export function showLoadMoreButton() {
    const loadMoreButton = document.querySelector("button[type='button']");
    loadMoreButton.classList.remove("visually-hidden");
}

export function hideLoadMoreButton() {
    const loadMoreButton = document.querySelector("button[type='button']");
    loadMoreButton.classList.add("visually-hidden");
}
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

export function clearGallery() {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
};

export function createLoader(){
    const loader = document.querySelector(".loader");
    loader.classList.add("load")
};

export function deleteLoader(){
    const loader = document.querySelector(".loader");
    loader.classList.remove("load")
};

export default function addImages(data) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
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

    gallery.insertAdjacentHTML("afterbegin", markup)
    let gallery_images = new SimpleLightbox('.gallery a');
    gallery_images.refresh();
} 

import getImagesByQuery from "./js/pixabay-api"
import addImages from "./js/render-functions"
import { clearGallery, showLoader, hideLoader, hideLoadMoreButton, showLoadMoreButton } from "./js/render-functions";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const inputField = document.querySelector("input");
const form = document.querySelector(".form");
let searchValue;
let pageNumber = 1;
    
form.addEventListener("submit", ev => {
    ev.preventDefault();
    searchValue = inputField.value.trim();
    inputField.value = "";
    hideLoadMoreButton();
    if (searchValue != "") {
        clearGallery();
        showLoader();
        pageNumber = 1;
        getImagesByQuery(searchValue, pageNumber)
            .then(data => {
                hideLoader();
                addImages(data.hits, pageNumber);
                showLoadMoreButton()
            })
            .catch(error => {
                hideLoader();
                iziToast.show({
                        title: 'Error',
                        message: error.message,
                        color: 'red',
                        position: "topRight"
                    });
    });
    } else {
        iziToast.show({
                        title: 'Error',
                        message: "Input field is empty. Please provide search instructions.",
                        color: 'red',
                        position: "topRight"
                    });
   }
});

const loadMoreButton = document.querySelector("button[type='button']");
loadMoreButton.addEventListener("click", ev => {
    ev.preventDefault();
    pageNumber += 1;
    hideLoadMoreButton();
    showLoader();
    getImagesByQuery(searchValue, pageNumber)
        .then(data => {
            hideLoader();
            addImages(data.hits, pageNumber);
            const galleryItem = document.querySelector(".gallery-item");
            const rectOfGalleryItem = galleryItem.getBoundingClientRect();
            window.scrollBy({
                top: rectOfGalleryItem["height"]*2,
                left: 0,
                behavior: "smooth",
                });
            if (Math.ceil(data.totalHits/15) == pageNumber) {
                throw new Error("We're sorry, but you've reached the end of search results.")
            }
            showLoadMoreButton()
        })
        .catch(error => {
            hideLoader();
            iziToast.show({
                    title: 'Error',
                    message: error.message,
                    color: 'red',
                    position: "topRight"
                });
    });
})
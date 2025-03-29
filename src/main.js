import getResponse from "./js/pixabay-api"
import addImages from "./js/render-functions"
import { clearGallery, createLoader, deleteLoader } from "./js/render-functions";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const inputField = document.querySelector("input");
const form = document.querySelector(".form");

form.addEventListener("submit", ev => {
    ev.preventDefault();
    if (inputField.value.trim() != "") {
        clearGallery();
        createLoader();
        getResponse(inputField.value.trim())
            .then(data => {
            deleteLoader();
            addImages(data);
            })
            .catch(error => {
                deleteLoader();
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
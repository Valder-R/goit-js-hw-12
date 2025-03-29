import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/";

export default function getResponse(search) {
    return axios.get("", {
        params: {
            q: search,
            key: "49577455-ade522c1ef99167d118a0e5b7",
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true"
        }
    })
        .then(response => {
            if (response.data.hits.length === 0) {
                throw new Error('Sorry, there are no images matching your search query. Please try again!');
            } else {
                return response.data.hits;
            }
})
}
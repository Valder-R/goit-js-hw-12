import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/";

export default async function getImagesByQuery(search, pageNumber) {
    const response = await axios.get("", {
        params: {
            q: search,
            key: "49577455-ade522c1ef99167d118a0e5b7",
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            page: pageNumber,
            per_page: 15
        }
    })
    
    if (response.data.hits.length === 0) {
        throw new Error('Sorry, there are no images matching your search query. Please try again!');
    } else {
        return response.data;
    }

}
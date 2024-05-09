import axios from "axios";

axios.defaults.baseURL = `https://api.unsplash.com/`;
const ACCESS_KEY = `qAW1lBdSOWYiAUhhxU26x9m7bNAD9tA6l70AypqRiBo`;

export const getImagesUnplash = async (searchImg, pageNumber) => {
    const params = {
        query: searchImg,
        page: pageNumber,
        per_page: 10,
        client_id: ACCESS_KEY,
    }
    try {
        const respons = await axios.get(`search/photos/?${new URLSearchParams(params).toString()}`);
        return respons.data;
    }
    catch (error) {
        console.log(error.message);
    }
}
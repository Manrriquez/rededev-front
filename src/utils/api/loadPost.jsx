
import { BASE_URL_PHOTOS, BASE_URL_POST } from "../../config/api";



export const loadPosts = async () => {
    
    const postsResponse = fetch(BASE_URL_POST);

    const photosResponse = fetch(BASE_URL_PHOTOS);

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
            return { ...post, cover: photosJson[index].url }
    })

    return postsAndPhotos;
}
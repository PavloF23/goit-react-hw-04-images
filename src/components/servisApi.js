import axios from 'axios'; 

const BASE_URL = 'https://pixabay.com/api/';
const KEY =  '32850209-97f2951747f8bc30e5bbd4a42';

export const fetchImages = async (name, page) => {
    const response = await axios.get(`${BASE_URL}?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;
    };

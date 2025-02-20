import axios from 'axios';

export const fetchImages = searchQuery => {
  const API_KEY = '48887234-fe7a8c0ecfa7b9a43b5097f7a';
  const URL = `https://pixabay.com/api/`;

  return axios
    .get(URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
      throw error;
    });
};

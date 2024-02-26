import { renderImgs } from './render-functions';

const API_URL = 'https://pixabay.com/api';
const API_KEY = '42570593-7f6e60f401c84611dfc2b0674';
const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
});

export const fetchImgs = searchValue => {
  fetch(`${API_URL}/?key=${API_KEY}&q=${searchValue}&${searchParams}`)
    .then(r => r.json())
    .then(r => renderImgs(r.hits));
};

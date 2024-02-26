// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImgs } from './js/pixabay-api';

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input[name="search"]');

function search(event) {
  event.preventDefault();

  fetchImgs(searchInput.value);
}

searchForm.addEventListener('submit', search);

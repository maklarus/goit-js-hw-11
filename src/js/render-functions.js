// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export function renderImgs(data) {
  const galleryTemplate = data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
        <div>
          <p>Likes</p>
          <p>${likes}</p>
        </div>
        <div>
          <p>Views</p>
          <p>${views}</p>
        </div>
        <div>
          <p>Comments</p>
          <p>${comments}</p>
        </div>
        <div>
          <p>Downloads</p>
          <p>${downloads}</p>
        </div>
      </li>`;
      }
    )
    .join('');

  gallery.innerHTML = galleryTemplate;
}

new SimpleLightbox('.gallery a');

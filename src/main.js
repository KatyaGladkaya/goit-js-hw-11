import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { showToast, clearGallery, renderImages } from './js/render-functions';

let lightbox;

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const query = searchInput.value.trim();

  if (!query) {
    showToast('Please enter a search query.');
    return;
  }

    showLoader();
    clearGallery(gallery);

  fetchImages(query)
    .then(function (images) {
      if (images.length === 0) {
        showToast(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
        renderImages(images, gallery);
      }
      if (lightbox) {
        lightbox.refresh();
      } else {
        lightbox = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionDelay: 250,
        });
      }
    })
    .catch(function (error) {
      showToast('Failed to fetch images. Please try again later.');
    })
    .finally(function () {
      hideLoader();
    });
});

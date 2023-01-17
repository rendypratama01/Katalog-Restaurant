/* eslint-disable no-underscore-dangle */
/* eslint-disable object-curly-spacing */
import RestaurantDbSource from '../../data/restaurant-source';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const main = {
  async render() {
    return `
        <div class="hero">
          <div class="hero__inner">
            <img src="./images/Logo/logo-1.png" alt="Logo Enakdong Apps">
            <h2 class="hero__title">Enakdong Apps</h2>
            <p class="hero__tagline">Find the restaurants</p>
          </div>
        </div>
        <div tabindex="0" id="isimainpage" class="content_container">
          <section class="content">
            <div class="list">
                <h1 class="list_title">Explore Restaurants</h1>
                <div class="posts" id="restauarantList"></div>
            </div>
          </section>
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.listRestaurant();
    const restaurantContainer = document.querySelector('#restauarantList');
    restaurants.forEach((restauran) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restauran);
    });

    const skipToContent = document.querySelector('.skip-link');
    skipToContent.addEventListener('click', (event) => {
      event.preventDefault();
      this._onClickSkipContent();
    });

    skipToContent.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this._onClickSkipContent();
      }
    });
  },

  _onClickSkipContent() {
    document.querySelector('#isimainpage').focus();
    document.querySelector('.skip-link').blur();
  },
};

export default main;

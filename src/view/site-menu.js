

export const createSiteMenuTemplate = (filterItems) => {

  const {isWatchList, isWatched, isFavourite} = filterItems;

  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${isWatchList}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${isWatched}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${isFavourite}</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};

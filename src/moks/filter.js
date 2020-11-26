
const filmToFilterMap = {
  all: (films) => films.length,
  watchlist: (films) => films.filter((film) => film.isWatchList).length,
  history: (films) => films.filter((film) => film.isWatched).length,
  favorites: (films) => films.filter((film) => film.isFavourite).length,
};

export const generateFilter = (films) => {
  return Object.entries(filmToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(films),
    };
  });
};

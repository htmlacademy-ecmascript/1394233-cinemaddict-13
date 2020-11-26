
export const generateFilter = (films) => {
  return {
    all: films.length,
    isWatchList: films.filter((film) => film.isWatchList).length,
    isWatched: films.filter((film) => film.isWatched).length,
    isFavourite: films.filter((film) => film.isFavourite).length
  };
};

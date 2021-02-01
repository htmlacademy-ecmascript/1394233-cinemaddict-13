import {FilterType} from "../consts.js";

const filter = {
  [FilterType.ALL]: (films) => films,
  [FilterType.WATCH_LIST]: (films) => films.filter((film) => film.isWatchList),
  [FilterType.HISTORY]: (films) => films.filter((film) => film.isWatched),
  [FilterType.FAVORITES]: (films) => films.filter((film) => film.isFavourite),
};

export {filter};

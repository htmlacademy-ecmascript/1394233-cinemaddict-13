export const MAX_SYMBOLS_DESCRIPTION = 140;
export const AMOUNT_GENRES_FOR_SINGLE_NUMBER = 1;

export const FilmListTitles = {
  MOST_COMMENTED: `Most commented`,
  TOP_RATED: `Top rated`,
  ALL: `All movies. Upcoming`
};

export const SortType = {
  DEFAULT: `default`,
  DATE: `date`,
  RATING: `rating`
};

export const ACTIVE_SORT_CLASS = `sort__button--active`;

export const UserAction = {
  UPDATE_FILM: `UPDATE_FILM`,
  DELETE_COMMENT: `DELETE_COMMENT`
};

export const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`,
  INIT: `INIT`
};

export const FilterType = {
  ALL: `all`,
  WATCH_LIST: `watchlist`,
  HISTORY: `history`,
  FAVORITES: `favorites`,
  STATS: `stats`
};

export const StatsType = {
  ALL: `all-time`,
  TODAY: `today`,
  WEEK: `week`,
  MONTH: `month`,
  YEAR: `year`
};

export const PeriodsForStatistic = {
  DAY: 1,
  WEEK: 6,
  MONTH: 31,
  YEAR: 365
};

export const UserRanks = {
  NOVICE: {
    watched: 1,
    rank: `Novice`
  },
  FAN: {
    watched: 11,
    rank: `Fan`
  },
  MOVIE_BUFF: {
    watched: 21,
    rank: `Movie Buff`
  }
};
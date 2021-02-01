const MAX_SYMBOLS_DESCRIPTION = 140;
const AMOUNT_GENRES_FOR_SINGLE_NUMBER = 1;
const ACTIVE_SORT_CLASS = `sort__button--active`;

const FilmListTitles = {
  MOST_COMMENTED: `Most commented`,
  TOP_RATED: `Top rated`,
  ALL: `All movies. Upcoming`
};

const SortType = {
  DEFAULT: `default`,
  DATE: `date`,
  RATING: `rating`
};

const UserAction = {
  UPDATE_FILM: `UPDATE_FILM`,
  LOCAL_UPDATE_FILM: `LOCAL_UPDATE_FILM`,
  DELETE_COMMENT: `DELETE_COMMENT`,
  ADD_COMMENT: `ADD_COMMENT`
};

const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`,
  INIT: `INIT`
};

const FilterType = {
  ALL: `all`,
  WATCH_LIST: `watchlist`,
  HISTORY: `history`,
  FAVORITES: `favorites`,
  STATS: `stats`
};

const StatsType = {
  ALL: `all-time`,
  TODAY: `today`,
  WEEK: `week`,
  MONTH: `month`,
  YEAR: `year`
};

const PeriodsForStatistic = {
  DAY: 1,
  WEEK: 6,
  MONTH: 31,
  YEAR: 365
};

const UserRanks = {
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

const CommentElementState = {
  ADDING: `ADDING`,
  DELETING: `DELETING`,
  ABORTING: `ABORTING`,
  ABORTING_DELETING: `ABORTING_DELETING`
};

export {
  MAX_SYMBOLS_DESCRIPTION,
  AMOUNT_GENRES_FOR_SINGLE_NUMBER,
  ACTIVE_SORT_CLASS,
  FilmListTitles,
  SortType,
  UserAction,
  UpdateType,
  FilterType,
  StatsType,
  PeriodsForStatistic,
  UserRanks,
  CommentElementState
};

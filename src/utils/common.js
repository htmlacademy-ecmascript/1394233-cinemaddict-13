import dayjs from "dayjs";

export const KeyboardKeys = {
  ESCAPE: `Escape`,
  ENTER: `Enter`
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const limitDescription = (descriptionText, maxSymbols) => descriptionText.length > maxSymbols ? `${descriptionText.substring(0, maxSymbols - 1)}...` : `${descriptionText}`;

export const sortByRating = (items) => items.slice().sort((a, b) => b.rating - a.rating);
export const sortByComments = (items) => items.slice().sort((a, b) => b.comments.length - a.comments.length);
export const sortingByRating = (a, b) => b.rating - a.rating;
export const sortByDate = (filmA, filmB) => dayjs(filmB.productionYear).diff(dayjs(filmA.productionYear));

export const getMaxKey = (object) => {
  const maxValue = Math.max.apply(null, Object.values(object));
  return Object.keys(object).filter((element) => object[element] === maxValue);
};

export const isOnline = () => window.navigator.onLine;

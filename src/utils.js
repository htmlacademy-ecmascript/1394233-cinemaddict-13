export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomIntegerDecimal = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return ((lower + Math.random() * (upper - lower + 1)) - 1).toFixed(1);
};

export const limitDescription = (descriptionText, maxSymbols) => {
  return descriptionText.length > maxSymbols ? `${descriptionText.substring(0, maxSymbols - 1)}...` : `${descriptionText}`;
};

export const upperFirst = (string) => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : ``;
};

export const generateRandomItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};

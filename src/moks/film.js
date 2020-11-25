import dayjs from "dayjs";

const TITLES = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `Made for Each Other`,
  `The Great Flamarion`
];

const DIRECTORS = [
  `Альфонсо Куарон`,
  `Александр Пэйн`,
  `Хаяо Миядзаки`,
  `Джафар Панахи`,
  `Пол Томас Андерсон`,
  `Асгар Фархади`,
  `Майк Ли`
];

const SCREENWRITERS = [
  `Билли Уайлдер`,
  `Джоэл Коэн`,
  `Роберт Таун`,
  `Квентин Тарантино`,
  `Уильям Голдман`,
  `Чарли Кауфман`,
  `Нора Эфрон`
];

const ACTORS = [
  `Alan Rickman`,
  `Benedict Cumberbatch`,
  `Benicio del Toro`,
  `James McAvoy`,
  `Cillian Murphy`,
  `Christian Bale`,
  `Leonardo DiCaprio`,
];

const COUNTRIES = [
  `Россия`,
  `США`,
  `Великобритания`,
  `Япония`,
  `Германия`
];

const GENRES = [
  `Комедия`,
  `Драмма`,
  `Мелодрамма`,
  `Триллер`,
  `Аниме`
];

const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomIntegerDecimal = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return ((lower + Math.random() * (upper - lower + 1)) - 1).toFixed(1);
};

const generateRandomItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};

const generateRandomDescription = () => {
  const randomIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);

  return DESCRIPTIONS[randomIndex];
};

const generateRandomGenre = () => {
  const randomIndex = getRandomInteger(0, GENRES.length - 1);

  return GENRES[randomIndex];
};

const generateRandomActor = () => {
  const randomIndex = getRandomInteger(0, ACTORS.length - 1);

  return ACTORS[randomIndex];
};

const generateRandomScreenWriter = () => {
  const randomIndex = getRandomInteger(0, SCREENWRITERS.length - 1);

  return SCREENWRITERS[randomIndex];
};

const generateDate = () => {
  const maxDaysGap = 30;
  const maxYearsGap = 40;
  const maxMonthsGap = 12;
  const daysGap = getRandomInteger(-maxDaysGap, 0);
  const yearsGap = getRandomInteger(-maxYearsGap, 0);
  const monthsGap = getRandomInteger(-maxMonthsGap, 0);

  return dayjs().add(daysGap, `day`).add(yearsGap, `year`).add(monthsGap, `month`).toDate();
};

const generateTime = () => {
  const maxHour = 2;
  const maxMinute = 59;
  const hour = getRandomInteger(0, maxHour);
  const minute = getRandomInteger(0, maxMinute);

  return dayjs().hour(0).minute(0).add(hour, `hour`).add(minute, `minute`).toDate();
};

const generateDescription = () => {
  const amountSentence = getRandomInteger(1, 5);

  return new Array(amountSentence).fill().map(generateRandomDescription);
};

const generateGenre = () => {
  const amountGenres = getRandomInteger(1, 3);

  return new Array(amountGenres).fill().map(generateRandomGenre);
};

const generateActors = () => {
  const amountActors = getRandomInteger(2, 3);

  return new Array(amountActors).fill().map(generateRandomActor);
};

const generateScreenWriters = () => {
  const amountScreenWriters = getRandomInteger(1, 2);

  return new Array(amountScreenWriters).fill().map(generateRandomScreenWriter);
};

export const generateFilm = function () {
  return {
    poster: generateRandomItem(POSTERS),
    title: generateRandomItem(TITLES),
    originalTitle: `Original: ${generateRandomItem(TITLES)}`,
    rating: getRandomIntegerDecimal(1, 10),
    director: generateRandomItem(DIRECTORS),
    screenwriter: generateScreenWriters().join(`, `),
    cast: generateActors().join(`, `),
    productionYear: generateDate(),
    duration: generateTime(),
    country: generateRandomItem(COUNTRIES),
    genre: generateGenre(),
    description: generateDescription().join(` `),
    ageRating: `${getRandomInteger(0, 18)}+`,
    comments: null,
  };
};

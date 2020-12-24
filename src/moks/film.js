import {nanoid} from "nanoid";
import dayjs from "dayjs";
import {getRandomInteger, getRandomIntegerDecimal, generateRandomItem} from "../utils/common.js";

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

const Rating = {
  MIN: 1,
  MAX: 10
};

const AgeRating = {
  MIN: 0,
  MAX: 18
};

const generateRandomDescription = () => DESCRIPTIONS[getRandomInteger(0, GENRES.length - 1)];
const generateRandomGenre = () => GENRES[getRandomInteger(0, GENRES.length - 1)];
const generateRandomActor = () => ACTORS[getRandomInteger(0, ACTORS.length - 1)];
const generateRandomScreenWriter = () => SCREENWRITERS[getRandomInteger(0, SCREENWRITERS.length - 1)];

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

const generateDescription = () => new Array(getRandomInteger(1, 5)).fill().map(generateRandomDescription);
const generateGenre = () => new Array(getRandomInteger(1, 3)).fill().map(generateRandomGenre);
const generateActors = () => new Array(getRandomInteger(2, 3)).fill().map(generateRandomActor);
const generateScreenWriters = () => new Array(getRandomInteger(1, 2)).fill().map(generateRandomScreenWriter);
const getRandomBooleanValue = () => Boolean(getRandomInteger(0, 1));

export const generateFilm = () => ({
  id: nanoid(),
  poster: generateRandomItem(POSTERS),
  title: generateRandomItem(TITLES),
  originalTitle: `Original: ${generateRandomItem(TITLES)}`,
  rating: getRandomIntegerDecimal(Rating.MIN, Rating.MAX),
  director: generateRandomItem(DIRECTORS),
  screenwriter: generateScreenWriters(),
  cast: generateActors(),
  productionYear: generateDate(),
  duration: generateTime(),
  country: generateRandomItem(COUNTRIES),
  genre: generateGenre(),
  description: generateDescription(),
  ageRating: `${getRandomInteger(AgeRating.MIN, AgeRating.MAX)}+`,
  comments: null,
  isWatchList: getRandomBooleanValue(),
  isWatched: getRandomBooleanValue(),
  isFavourite: getRandomBooleanValue(),
});

import {generateRandomComment} from "./moks/comments.js";
import {getRandomInteger} from "./utils.js";
import {createUserRangTemplate} from "./view/user-rang.js";
import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createMainContentTemplate} from "./view/main-content.js";
import {createFilmsListTemplate} from "./view/films-list.js";
import {createCardFilmTemplate} from "./view/card.js";
import {createShowMoreBtnTemplate} from "./view/show-more-btn.js";
import {createTopRatedListTemplate} from "./view/top-rated.js";
import {createMostCommentedListTemplate} from "./view/most-comment.js";
import {createSiteStatisticTemplate} from "./view/statistics.js";
import {createPopupTemplate} from "./view/popup.js";
import {generateFilm} from "./moks/film.js";
import {generateFilter} from "./moks/filter.js";

const FILMS_AMOUNT = 25;
const FILMS_AMOUNT_PER_STEP = 5;

const films = new Array(FILMS_AMOUNT).fill().map(generateFilm);
const filters = generateFilter(films);
const numberOfFilmsInData = films.length;

const comments = {};
for (let i = 0; i < FILMS_AMOUNT; i++) {
  const commentsArr = new Array(getRandomInteger(1, 5)).fill().map(generateRandomComment);
  commentsArr.forEach((element, index) => {
    element.id = index;
  });
  comments[i] = commentsArr;
}

const sortByRating = (array) => {
  return array.slice().sort((a, b) => {
    if (a.rating > b.rating) {
      return -1;
    }

    if (a.rating < b.rating) {
      return 1;
    }

    return 0;
  });
};

const sortByComments = (array) => {
  return array.slice().sort((a, b) => {
    if (a.comments.length > b.comments.length) {
      return -1;
    }

    if (a.comments.length < b.comments.length) {
      return 1;
    }

    return 0;
  });
};

for (let i = 0; i < films.length; i++) {
  films[i].comments = new Array(comments[i].length);
  for (let j = 0; j < films[i].comments.length; j++) {
    films[i].comments[j] = j;
  }
}

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderNode = document.querySelector(`.header`);
const siteMainNode = document.querySelector(`.main`);
const siteFooterNode = document.querySelector(`.footer`);
const statisticNode = siteFooterNode.querySelector(`.footer__statistics`);

render(siteHeaderNode, createUserRangTemplate(), `beforeend`);
render(siteMainNode, createSiteMenuTemplate(filters), `beforeend`);
render(siteMainNode, createFilterTemplate(), `beforeend`);
render(siteMainNode, createMainContentTemplate(), `beforeend`);

const filmsNode = siteMainNode.querySelector(`.films`);

render(filmsNode, createFilmsListTemplate(), `beforeend`);

const filmsListNode = filmsNode.querySelector(`.films-list`);
const filmsContainerNode = filmsNode.querySelector(`.films-list__container`);

if (films.length > FILMS_AMOUNT_PER_STEP) {
  let renderedFilmCount = FILMS_AMOUNT_PER_STEP;

  render(filmsListNode, createShowMoreBtnTemplate(), `beforeend`);

  const showMoreButton = filmsListNode.querySelector(`.films-list__show-more`);

  showMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    films.slice(renderedFilmCount, renderedFilmCount + FILMS_AMOUNT_PER_STEP)
    .forEach((filmsElems) => render(filmsContainerNode, createCardFilmTemplate(filmsElems), `beforeend`));

    renderedFilmCount += FILMS_AMOUNT_PER_STEP;

    if (renderedFilmCount >= films.length) {
      showMoreButton.remove();
    }
  });
}

for (let i = 1; i < Math.min(films.length, FILMS_AMOUNT_PER_STEP + 1); i++) {
  render(filmsContainerNode, createCardFilmTemplate(films[i]), `beforeend`);
}

render(filmsNode, createTopRatedListTemplate(), `beforeend`);
render(filmsNode, createMostCommentedListTemplate(), `beforeend`);

const topRatedFilmsNode = filmsNode.querySelector(`.films-list--top-rated`);
const topRatedFilmsContainerNode = topRatedFilmsNode.querySelector(`.films-list__container`);
const mostCommentedFilmsNode = filmsNode.querySelector(`.films-list--most-comment`);
const mostCommentedFilmsContainerNode = mostCommentedFilmsNode.querySelector(`.films-list__container`);

for (let i = 0; i < 2; i++) {
  render(topRatedFilmsContainerNode, createCardFilmTemplate(sortByRating(films)[i]), `beforeend`);
}

for (let i = 0; i < 2; i++) {
  render(mostCommentedFilmsContainerNode, createCardFilmTemplate(sortByComments(films)[i]), `beforeend`);
}


render(statisticNode, createSiteStatisticTemplate(numberOfFilmsInData), `beforeend`);

render(siteFooterNode, createPopupTemplate(films[0], comments[0]), `afterend`);


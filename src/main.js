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
import {generateRandomComment} from "./moks/comments.js";

const FILMS_AMOUNT = 20;

const films = new Array(FILMS_AMOUNT).fill().map(generateFilm);

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const newComments = new Array(getRandomInteger(1, 5)).fill().map(generateRandomComment);

newComments.forEach((element, index) => {
  element.id = index;
});

for (let i = 0; i < films.length; i++) {
  films[i].comments = new Array(newComments.length);
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
render(siteMainNode, createSiteMenuTemplate(), `beforeend`);
render(siteMainNode, createFilterTemplate(), `beforeend`);
render(siteMainNode, createMainContentTemplate(), `beforeend`);

const filmsNode = siteMainNode.querySelector(`.films`);

render(filmsNode, createFilmsListTemplate(), `beforeend`);

const filmsListNode = filmsNode.querySelector(`.films-list`);
const filmsContainerNode = filmsNode.querySelector(`.films-list__container`);

render(filmsListNode, createShowMoreBtnTemplate(), `beforeend`);

for (let i = 0; i < 5; i++) {
  render(filmsContainerNode, createCardFilmTemplate(films[i], newComments), `beforeend`);
}

render(filmsNode, createTopRatedListTemplate(), `beforeend`);
render(filmsNode, createMostCommentedListTemplate(), `beforeend`);

const topRatedFilmsNode = filmsNode.querySelector(`.films-list--top-rated`);
const topRatedFilmsContainerNode = topRatedFilmsNode.querySelector(`.films-list__container`);
const mostCommentedFilmsNode = filmsNode.querySelector(`.films-list--most-comment`);
const mostCommentedFilmsContainerNode = mostCommentedFilmsNode.querySelector(`.films-list__container`);

for (let i = 0; i < 2; i++) {
  render(topRatedFilmsContainerNode, createCardFilmTemplate(films[i]), `beforeend`);
}

for (let i = 0; i < 2; i++) {
  render(mostCommentedFilmsContainerNode, createCardFilmTemplate(films[i]), `beforeend`);
}


render(statisticNode, createSiteStatisticTemplate(), `beforeend`);

render(siteFooterNode, createPopupTemplate(films[6], newComments), `afterend`);


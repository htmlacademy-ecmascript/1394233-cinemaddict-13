import {render, RenderPosition} from "./utils/render.js";

import UserRangView from "./view/user-rang.js";
import NavigationView from "./view/navigation.js";
import FilterView from "./view/site-menu.js";
import StatsLinkView from "./view/stats-link.js";
import SiteStatisticView from "./view/statistics.js";
import FilmsPresenter from "./presenter/films.js";

import {generateFilm} from "./moks/film.js";
import {generateFilter} from "./moks/filter.js";

const FILMS_AMOUNT = 20;

const films = new Array(FILMS_AMOUNT).fill(``).map(generateFilm);
const filters = generateFilter(films);

const siteBodyNode = document.querySelector(`body`);
const siteHeaderNode = siteBodyNode.querySelector(`.header`);
const siteMainNode = siteBodyNode.querySelector(`.main`);
const statisticNode = siteBodyNode.querySelector(`.footer__statistics`);

const filmsPresenter = new FilmsPresenter(siteMainNode, siteBodyNode);

render(siteHeaderNode, new UserRangView(), RenderPosition.BEFOREEND);
const navigationComponent = new NavigationView();
render(siteMainNode, navigationComponent, RenderPosition.BEFOREEND);
render(navigationComponent, new FilterView(filters), RenderPosition.BEFOREEND);
render(navigationComponent, new StatsLinkView(), RenderPosition.BEFOREEND);

filmsPresenter.init(films);

render(statisticNode, new SiteStatisticView(films.length), RenderPosition.BEFOREEND);

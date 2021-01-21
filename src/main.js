import {render, RenderPosition} from "./utils/render.js";

import UserRangView from "./view/user-rang.js";
import NavigationView from "./view/navigation.js";
import StatsView from "./view/stats.js";
import SiteStatisticView from "./view/statistics.js";
import FilmsPresenter from "./presenter/films.js";
import FilterPresenter from "./presenter/filter.js";
import FilmsModel from "./model/films.js";
import FilterModel from "./model/filter.js";

import {FilterType} from "./consts.js";
import {generateFilm} from "./moks/film.js";

const FILMS_AMOUNT = 20;

const films = new Array(FILMS_AMOUNT).fill(``).map(generateFilm);

const filmsModel = new FilmsModel();
filmsModel.setFilms(films);


const filterModel = new FilterModel();

const siteBodyNode = document.querySelector(`body`);
const siteHeaderNode = siteBodyNode.querySelector(`.header`);
const siteMainNode = siteBodyNode.querySelector(`.main`);
const statisticNode = siteBodyNode.querySelector(`.footer__statistics`);

render(siteHeaderNode, new UserRangView(), RenderPosition.BEFOREEND);
const navigationComponent = new NavigationView();
render(siteMainNode, navigationComponent, RenderPosition.BEFOREEND);
const filterPresenter = new FilterPresenter(navigationComponent, filterModel, filmsModel);
const filmsPresenter = new FilmsPresenter(siteMainNode, siteBodyNode, filmsModel, filterModel, filterPresenter);
const statsComponent = new StatsView(filmsModel);

const handleNavigationMenuClick = (navigationItem) => {
  switch (navigationItem) {
    case FilterType.STATS:
      filmsPresenter.hide();
      statsComponent.show();
      statsComponent.getStatistic();
      break;
    default:
      filmsPresenter.show();
      statsComponent.hide();
      break;
  }
};

navigationComponent.setNavigationClickHandler(handleNavigationMenuClick);

filterPresenter.init();
// render(navigationComponent, new StatsLinkView(), RenderPosition.BEFOREEND);

filmsPresenter.init();

render(siteMainNode, statsComponent, RenderPosition.BEFOREEND);

render(statisticNode, new SiteStatisticView(films.length), RenderPosition.BEFOREEND);

import {render, RenderPosition} from "./utils/render.js";

import UserRangView from "./view/user-rank.js";
import NavigationView from "./view/navigation.js";
import StatsView from "./view/stats.js";
import SiteStatisticView from "./view/statistics.js";
import FilmsPresenter from "./presenter/films.js";
import FilterPresenter from "./presenter/filter.js";
import FilmsModel from "./model/films.js";
import FilterModel from "./model/filter.js";

import {FilterType, StatsType} from "./consts.js";
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

render(siteHeaderNode, new UserRangView(filmsModel), RenderPosition.BEFOREEND);
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
      statsComponent.getStatistic(StatsType.ALL);
      break;
    default:
      filmsPresenter.show();
      statsComponent.hide();
      break;
  }
};

const handleStatisticTypeChange = (statisticType) => {
  switch (statisticType) {
    case StatsType.ALL:
      statsComponent.getStatistic(StatsType.ALL);
      break;
    case StatsType.TODAY:
      statsComponent.getStatistic(StatsType.TODAY);
      break;
    case StatsType.WEEK:
      statsComponent.getStatistic(StatsType.WEEK);
      break;
    case StatsType.MONTH:
      statsComponent.getStatistic(StatsType.MONTH);
      break;
    case StatsType.YEAR:
      statsComponent.getStatistic(StatsType.YEAR);
      break;
  }
};

navigationComponent.setNavigationClickHandler(handleNavigationMenuClick);
statsComponent.setStatisticTypeChangeHandler(handleStatisticTypeChange);

filterPresenter.init();
// render(navigationComponent, new StatsLinkView(), RenderPosition.BEFOREEND);

filmsPresenter.init();

render(siteMainNode, statsComponent, RenderPosition.BEFOREEND);

render(statisticNode, new SiteStatisticView(films.length), RenderPosition.BEFOREEND);

import {render, RenderPosition} from "./utils/render.js";
import {toast} from "./utils/toast/toast.js";

import UserRangView from "./view/user-rank.js";
import NavigationView from "./view/navigation.js";
import StatsView from "./view/stats.js";
import SiteStatisticView from "./view/statistics.js";
import FilmsPresenter from "./presenter/films.js";
import FilterPresenter from "./presenter/filter.js";
import FilmsModel from "./model/films.js";
import FilterModel from "./model/filter.js";

import {FilterType, StatsType, UpdateType} from "./consts.js";
import {getWatchedFilms} from "./utils/stats.js";
import Api from "./api/api.js";
import Store from "./api/store.js";
import Provider from "./api/provider.js";

const AUTHORIZATION = `Basic ewi13asdkxz`;
const END_POINT = `https://13.ecmascript.pages.academy/cinemaddict`;

const STORE_PREFIX = `cinemaddict-localstorage`;
const STORE_VER = `v13`;
const STORE_NAME = `${STORE_PREFIX}-${STORE_VER}`;

const COMMENTS_STORE_PREFIX = `cinemaddict-comments-localstorage`;
const COMMENTS_STORE_VER = `v1`;
const COMMENTS_STORE_NAME = `${COMMENTS_STORE_PREFIX}-${COMMENTS_STORE_VER}`;

const api = new Api(END_POINT, AUTHORIZATION);

const filmsStore = new Store(STORE_NAME, window.localStorage);
const commentsStore = new Store(COMMENTS_STORE_NAME, window.localStorage);
const apiWithProvider = new Provider(api, filmsStore, commentsStore);

const filmsModel = new FilmsModel();

apiWithProvider.getFilms()
  .then((films) => {
    filmsModel.set(UpdateType.INIT, films);
    render(statisticNode, new SiteStatisticView(filmsModel.get().length), RenderPosition.BEFOREEND);

    const statsComponent = new StatsView(getWatchedFilms(filmsModel.get()));

    const handleNavigationMenuClick = (navigationItem) => {
      switch (navigationItem) {
        case FilterType.STATS:
          filmsPresenter.hide();
          statsComponent.changeUserRang(getWatchedFilms(filmsModel.get()).length);
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

    render(siteMainNode, statsComponent, RenderPosition.BEFOREEND);
  })
  .catch(() => {
    filmsModel.set(UpdateType.INIT, []);
  });

const filterModel = new FilterModel();

const siteBodyNode = document.querySelector(`body`);
const siteHeaderNode = siteBodyNode.querySelector(`.header`);
const siteMainNode = siteBodyNode.querySelector(`.main`);
const statisticNode = siteBodyNode.querySelector(`.footer__statistics`);

let userRangComponent = new UserRangView(getWatchedFilms(filmsModel.get()).length);
render(siteHeaderNode, userRangComponent, RenderPosition.BEFOREEND);
const navigationComponent = new NavigationView();
render(siteMainNode, navigationComponent, RenderPosition.BEFOREEND);
const filterPresenter = new FilterPresenter(navigationComponent, filterModel, filmsModel);
const filmsPresenter = new FilmsPresenter(siteMainNode, siteBodyNode, filmsModel, filterModel, filterPresenter, apiWithProvider, userRangComponent);


filterPresenter.init();
filmsPresenter.init();

window.addEventListener(`load`, () => {
  navigator.serviceWorker.register(`/sw.js`);
});

window.addEventListener(`online`, () => {
  document.title = document.title.replace(` [offline]`, ``);
  apiWithProvider.sync();
  toast(`Связь с сетью востановленна. Вы работаете онлайн!`);
});

window.addEventListener(`offline`, () => {
  document.title += ` [offline]`;
  toast(`Пропала связьс сетью. Вы работаете офлайн!`);
});

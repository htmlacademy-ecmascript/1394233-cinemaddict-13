import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import {getMaxKey} from "../utils/common.js";
import {StatsType, PeriodsForStatistic} from "../consts.js";
import {createElement} from "../utils/render.js";

import SmartView from "./smart.js";

dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);

const getDuration = (films) => {
  let totalDuration = 0;

  films.forEach((element) => {
    totalDuration = totalDuration + element.duration;
  });

  return {
    hour: Math.trunc(totalDuration / 60),
    minutes: totalDuration % 60,
  };
};

const getGenresStats = (films) => {
  let results = {};

  films.forEach((element) => {
    if (results.hasOwnProperty(element.genre[0])) {
      results[element.genre[0]]++;
    } else {
      results[element.genre[0]] = 1;
    }
  });

  return results;
};

const createStatisticDataTemplate = (films) => {
  const {hour, minutes} = getDuration(films);

  return `<ul class="statistic__text-list">
  <li class="statistic__text-item">
    <h4 class="statistic__item-title">You watched</h4>
    <p class="statistic__item-text">${films.length} <span class="statistic__item-description">movies</span></p>
  </li>
  <li class="statistic__text-item">
    <h4 class="statistic__item-title">Total duration</h4>
    <p class="statistic__item-text">${hour}<span class="statistic__item-description">h</span>${minutes}<span class="statistic__item-description">m</span></p>
  </li>
  <li class="statistic__text-item">
    <h4 class="statistic__item-title">Top genre</h4>
    <p class="statistic__item-text">${getMaxKey(getGenresStats(films))}</p>
  </li>
  </ul>`;
};

const createChartDataTemplate = () => {
  return `<div class="statistic__chart-wrap">
  <canvas class="statistic__chart" width="1000"></canvas>
  </div>`;
};

const createStatisticsTemplate = () => {
  return `<section class="statistic hidden">
    <p class="statistic__rank">
      Your rank
      <img class="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      <span class="statistic__rank-label">Movie Buff</span>
    </p>

    <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
      <p class="statistic__filters-description">Show stats:</p>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-all-time" value="all-time" checked>
      <label for="statistic-all-time" class="statistic__filters-label">All time</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-today" value="today">
      <label for="statistic-today" class="statistic__filters-label">Today</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-week" value="week">
      <label for="statistic-week" class="statistic__filters-label">Week</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-month" value="month">
      <label for="statistic-month" class="statistic__filters-label">Month</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-year" value="year">
      <label for="statistic-year" class="statistic__filters-label">Year</label>
    </form>

    </section>`;
};

export default class Stats extends SmartView {
  constructor(filmsModel) {
    super();
    this._films = filmsModel.getFilms();

    this._statisticTypeChangeHandler = this._statisticTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createStatisticsTemplate(this._films);
  }

  getStatistic(statisticType) {
    const labels = [];
    const counts = [];

    let watchedFilms = null;

    const statisticDataElement = this.getElement().querySelector(`.statistic__text-list`);
    const statisticChartElement = this.getElement().querySelector(`.statistic__chart-wrap`);

    let statisticElement = null;
    let chartElement = null;

    const dateFrom = (daysToFull) => {
      return dayjs().subtract(daysToFull, `day`).toDate();
    };

    const dateTo = dayjs().toDate();

    switch (statisticType) {
      case StatsType.ALL:
        watchedFilms = this._films.slice();
        if (statisticDataElement && statisticChartElement) {
          this.getElement().removeChild(statisticDataElement);
          this.getElement().removeChild(statisticChartElement);
        }
        statisticElement = createElement(createStatisticDataTemplate(watchedFilms));
        chartElement = createElement(createChartDataTemplate());
        this.getElement().appendChild(statisticElement);
        this.getElement().appendChild(chartElement);
        Object
          .entries(getGenresStats(watchedFilms))
          .sort((a, b) => b[1] - a[1])
          .forEach(([label, count]) => {
            labels.push(label);
            counts.push(count);
          });
        break;
      case StatsType.TODAY:
        watchedFilms = this._films.slice().filter((element) => {
          return dayjs(element.watchedDate).isBetween(dateFrom(PeriodsForStatistic.DAY), dateTo);
        });
        if (statisticDataElement && statisticChartElement) {
          this.getElement().removeChild(statisticDataElement);
          this.getElement().removeChild(statisticChartElement);
        }
        statisticElement = createElement(createStatisticDataTemplate(watchedFilms));
        chartElement = createElement(createChartDataTemplate());
        this.getElement().appendChild(statisticElement);
        this.getElement().appendChild(chartElement);
        Object
          .entries(getGenresStats(watchedFilms))
          .sort((a, b) => b[1] - a[1])
          .forEach(([label, count]) => {
            labels.push(label);
            counts.push(count);
          });
        break;
      case StatsType.WEEK:
        watchedFilms = this._films.slice().filter((element) => {
          return dayjs(element.watchedDate).isBetween(dateFrom(PeriodsForStatistic.WEEK), dateTo);
        });
        if (statisticDataElement && statisticChartElement) {
          this.getElement().removeChild(statisticDataElement);
          this.getElement().removeChild(statisticChartElement);
        }
        statisticElement = createElement(createStatisticDataTemplate(watchedFilms));
        chartElement = createElement(createChartDataTemplate());
        this.getElement().appendChild(statisticElement);
        this.getElement().appendChild(chartElement);
        Object
          .entries(getGenresStats(watchedFilms))
          .sort((a, b) => b[1] - a[1])
          .forEach(([label, count]) => {
            labels.push(label);
            counts.push(count);
          });
        break;
      case StatsType.MONTH:
        watchedFilms = this._films.slice().filter((element) => {
          return dayjs(element.watchedDate).isBetween(dateFrom(PeriodsForStatistic.MONTH), dateTo);
        });
        if (statisticDataElement && statisticChartElement) {
          this.getElement().removeChild(statisticDataElement);
          this.getElement().removeChild(statisticChartElement);
        }
        statisticElement = createElement(createStatisticDataTemplate(watchedFilms));
        chartElement = createElement(createChartDataTemplate());
        this.getElement().appendChild(statisticElement);
        this.getElement().appendChild(chartElement);
        Object
          .entries(getGenresStats(watchedFilms))
          .sort((a, b) => b[1] - a[1])
          .forEach(([label, count]) => {
            labels.push(label);
            counts.push(count);
          });
        break;
      case StatsType.YEAR:
        watchedFilms = this._films.slice().filter((element) => {
          return dayjs(element.watchedDate).isBetween(dateFrom(PeriodsForStatistic.YEAR), dateTo);
        });
        if (statisticDataElement && statisticChartElement) {
          this.getElement().removeChild(statisticDataElement);
          this.getElement().removeChild(statisticChartElement);
        }
        statisticElement = createElement(createStatisticDataTemplate(watchedFilms));
        chartElement = createElement(createChartDataTemplate());
        this.getElement().appendChild(statisticElement);
        this.getElement().appendChild(chartElement);
        Object
          .entries(getGenresStats(watchedFilms))
          .sort((a, b) => b[1] - a[1])
          .forEach(([label, count]) => {
            labels.push(label);
            counts.push(count);
          });
        break;
    }

    const BAR_HEIGHT = 50;
    const statisticCtx = document.querySelector(`.statistic__chart`);

    statisticCtx.height = BAR_HEIGHT * Object.entries(getGenresStats(watchedFilms)).length;

    return new Chart(statisticCtx, {
      plugins: [ChartDataLabels],
      type: `horizontalBar`,
      data: {
        labels,
        datasets: [{
          data: counts,
          backgroundColor: `#ffe800`,
          hoverBackgroundColor: `#ffe800`,
          anchor: `start`
        }]
      },
      options: {
        plugins: {
          datalabels: {
            font: {
              size: 20
            },
            color: `#ffffff`,
            anchor: `start`,
            align: `start`,
            offset: 40,
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: `#ffffff`,
              padding: 100,
              fontSize: 20
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
            barThickness: 24
          }],
          xAxes: [{
            ticks: {
              display: false,
              beginAtZero: true
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
          }],
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    });
  }

  _statisticTypeChangeHandler(evt) {
    evt.preventDefault();
    this._callback.statisticTypeChange(evt.target.value);
  }

  setStatisticTypeChangeHandler(callback) {
    this._callback.statisticTypeChange = callback;
    this.getElement().addEventListener(`change`, this._statisticTypeChangeHandler);
  }
}

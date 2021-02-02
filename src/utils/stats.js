import dayjs from "dayjs";

import {createElement} from "./render.js";
import {UserRanks} from "../consts.js";

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
  const results = {};

  films.reduce((acc, film) => acc.concat(film.genre), [])
    .forEach((genre) => {
      if (results[genre]) {
        results[genre]++;
        return;
      }
      results[genre] = 1;
    });
  return results;
};

const dateFrom = (daysToFull) => dayjs().subtract(daysToFull, `day`).toDate();

const replaceStatsElements = (parent, textDataElement, chartElement, statisticDataTemplate, chartDataTemplate) => {
  if (textDataElement && chartElement) {
    parent.removeChild(textDataElement);
    parent.removeChild(chartElement);
  }
  const newStatisticElement = createElement(statisticDataTemplate);
  const newChartElement = createElement(chartDataTemplate);

  parent.appendChild(newStatisticElement);
  parent.appendChild(newChartElement);
};

const updateLabelData = (labels, counts, films) => {
  Object
  .entries(getGenresStats(films))
  .sort((a, b) => b[1] - a[1])
  .forEach(([label, count]) => {
    labels.push(label);
    counts.push(count);
  });
};

const getWatchedFilms = (films) => films.slice().filter((film) => film.isWatched);

const getUserRank = (watchedFilms) => {
  if (watchedFilms >= UserRanks.NOVICE.watched && watchedFilms < UserRanks.FAN.watched) {
    return UserRanks.NOVICE.rank;
  }
  if (watchedFilms >= UserRanks.FAN.watched && watchedFilms < UserRanks.MOVIE_BUFF.watched) {
    return UserRanks.FAN.rank;
  }
  return UserRanks.MOVIE_BUFF.rank;
};

export {getDuration, getGenresStats, dateFrom, replaceStatsElements, updateLabelData, getWatchedFilms, getUserRank};

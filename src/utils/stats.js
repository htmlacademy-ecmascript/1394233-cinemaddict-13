import dayjs from "dayjs";

import {createElement} from "../utils/render.js";

export const getDuration = (films) => {
  let totalDuration = 0;

  films.forEach((element) => {
    totalDuration = totalDuration + element.duration;
  });

  return {
    hour: Math.trunc(totalDuration / 60),
    minutes: totalDuration % 60,
  };
};

export const getGenresStats = (films) => {
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

export const dateFrom = (daysToFull) => {
  return dayjs().subtract(daysToFull, `day`).toDate();
};

export const replaceStatsElements = (parent, textDataElement, chartElement, statisticDataTemplate, chartDataTemplate) => {
  if (textDataElement && chartElement) {
    parent.removeChild(textDataElement);
    parent.removeChild(chartElement);
  }
  const newStatisticElement = createElement(statisticDataTemplate);
  const newChartElement = createElement(chartDataTemplate);

  parent.appendChild(newStatisticElement);
  parent.appendChild(newChartElement);
};

export const updateLabelData = (labelsArray, countsArray, films) => {
  Object
  .entries(getGenresStats(films))
  .sort((a, b) => b[1] - a[1])
  .forEach(([label, count]) => {
    labelsArray.push(label);
    countsArray.push(count);
  });
};

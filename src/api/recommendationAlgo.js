import { BUY, SELL, HOLD } from "../constants/constants";

export const recommendationAlgorithm = (stockData) => {
  if (stockData.length < 1) {
    return "";
  }

  const stockPriceAverage =
    stockData.reduce((accumulator, data) => accumulator + data.stockPrice, 0) /
    stockData.length;

  const socialInterestAverage =
    stockData.reduce(
      (accumulator, data) => accumulator + data.socialMediaCount,
      0
    ) / stockData.length;

  const endDateData = stockData[stockData.length - 1];

  if (
    endDateData.stockPrice > stockPriceAverage &&
    endDateData.socialMediaCount > socialInterestAverage
  ) {
    return BUY;
  } else if (
    endDateData.stockPrice < stockPriceAverage &&
    endDateData.socialMediaCount < socialInterestAverage
  ) {
    return SELL;
  } else {
    return HOLD;
  }
};

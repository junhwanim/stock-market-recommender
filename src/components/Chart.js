import React from "react";
import { colors } from "../styles/colors";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { BUY, SELL, HOLD } from "../constants/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Chart = ({ stockData, recommendation }) => {
  const pickBgColor = (recommendation) => {
    if (recommendation === BUY) return colors.redBg;
    if (recommendation === SELL) return colors.greenBg;
    if (recommendation === HOLD) return colors.yellowBg;
  };

  const data = {
    labels: stockData.map((data) => data.date),
    datasets: [
      {
        fill: true,
        label: "Stock Price in CAD",
        data: stockData.map((data) => data.stockPrice),
        borderColor: colors.black,
        backgroundColor: pickBgColor(recommendation),
      },
    ],
  };

  return <Line width={360} height={360} data={data} />;
};

export default Chart;

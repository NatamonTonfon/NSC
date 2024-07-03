// src/FactorChart.js
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const FactorChart = ({ data, selectedFactors }) => {
  const labels = data.map((item) => item.Date);
  const datasets = selectedFactors.map((factor) => ({
    label: factor,
    data: data.map((item) => parseFloat(item[factor])),
    fill: false,
    borderColor: getRandomColor(),
  }));

  const chartData = {
    labels,
    datasets,
  };

  return <Line data={chartData} />;
};

FactorChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedFactors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FactorChart;

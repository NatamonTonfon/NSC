import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import * as d3 from "d3";

const FactorChart = ({ data, selectedFactors }) => {
  const factorColors = {
    mkt: "#ff7300",
    smb: "#387908",
    hml: "#8884d8",
    rmw: "#8a2be2",
    cma: "#ff1493",
    umd: "#1e90ff",
  };

  return (
    <LineChart width={800} height={500} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="date"
        tickFormatter={(date) => d3.timeFormat("%Y-%m-%d")(date)}
      />
      <YAxis />
      <Tooltip labelFormatter={(label) => d3.timeFormat("%Y-%m-%d")(label)} />
      <Legend />
      {selectedFactors.map((factor) => (
        <Line
          key={factor}
          type="monotone"
          dataKey={factor}
          stroke={factorColors[factor]}
        />
      ))}
    </LineChart>
  );
};

FactorChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.instanceOf(Date).isRequired,
      mkt: PropTypes.number,
      smb: PropTypes.number,
      hml: PropTypes.number,
      rmw: PropTypes.number,
      cma: PropTypes.number,
      umd: PropTypes.number,
    })
  ).isRequired,
  selectedFactors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FactorChart;

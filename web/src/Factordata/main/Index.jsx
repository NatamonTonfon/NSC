// src/App.js
import { useState, useEffect } from "react";
import FactorChart from "../Factorchart";
import Headda from "../hero/Index";

import { csv } from "d3-fetch";

const main = () => {
  const [data, setData] = useState([]);
  const [selectedFactors, setSelectedFactors] = useState(["MKT", "SMB", "HML"]);

  useEffect(() => {
    csv("/TH_LS_factors_M_20240622.csv")
      .then((parsedData) => {
        console.log(parsedData);
        setData(parsedData);
      })
      .catch((error) => {
        console.error("Error fetching or parsing CSV data:", error);
      });
  }, []);

  const handleFactorChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFactors((prevSelectedFactors) =>
      checked
        ? [...prevSelectedFactors, value]
        : prevSelectedFactors.filter((factor) => factor !== value)
    );
  };

  const factorOptions = ["MKT", "SMB", "HML", "AnotherFactor"]; // Add more factors as needed

  return (
    <div className="main">
      <Headda />
      <div>
        <h2>Select Factors</h2>
        {factorOptions.map((factor) => (
          <label key={factor}>
            <input
              type="checkbox"
              value={factor}
              checked={selectedFactors.includes(factor)}
              onChange={handleFactorChange}
            />
            {factor}
          </label>
        ))}
      </div>
      <FactorChart data={data} selectedFactors={selectedFactors} />
    </div>
  );
};

export default main;

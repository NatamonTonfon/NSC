import React, { useState, useEffect } from "react";
import { csv } from "d3-fetch";
import * as d3 from "d3";
import FactorChart from "../Factorchart";
import Headda from "../hero/Index"; // Adjust path as needed

const Main = () => {
  const [data, setData] = useState([]);
  const [selectedFactors, setSelectedFactors] = useState(["mkt"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching CSV data from: /TH_LS_factors_M_20240622.csv");
        const parsedData = await csv("/TH_LS_factors_M_20240622.csv");
        console.log("Parsed CSV Data:", parsedData);
        const dateParser = d3.timeParse("%m/%d/%Y");
        const formattedData = parsedData.map((d) => {
          const parsedDate = dateParser(d.date);
          console.log("Parsed Date:", parsedDate, "Raw Date:", d.date);
          return {
            date: parsedDate,
            mkt: parseFloat(d.mkt),
            smb: parseFloat(d.smb),
            hml: parseFloat(d.hml),
            rmw: parseFloat(d.rmw),
            cma: parseFloat(d.cma),
            umd: parseFloat(d.umd),
          };
        });
        console.log("Formatted Data:", formattedData);
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching or parsing CSV data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFactorChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFactors((prevSelectedFactors) =>
      checked
        ? [...prevSelectedFactors, value]
        : prevSelectedFactors.filter((factor) => factor !== value)
    );
  };

  const factorOptions = ["mkt", "smb", "hml", "rmw", "cma", "umd"];

  return (
    <div className="main">
      <Headda />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Select Factors</h2>
        <div className="flex flex-wrap gap-4">
          {factorOptions.map((factor) => (
            <label key={factor} className="flex items-center">
              <input
                type="checkbox"
                value={factor}
                checked={selectedFactors.includes(factor)}
                onChange={handleFactorChange}
                className="checkbox checkbox-primary"
              />
              <span className="ml-2">{factor}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="p-4">
        {data.length > 0 ? (
          <FactorChart data={data} selectedFactors={selectedFactors} />
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faUsers,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2019", 1000, 400],
  ["2020", 1170, 460],
  ["2021", 660, 1120],
  ["2022    ", 1030, 540],
];

export const options = {
  isStacked: "relative",
  height: 300,
  legend: { position: "top", maxLines: 3 },
  datalessRegionColor: "#27adfc",

  vAxis: {
    minValue: 0,
    ticks: [0, 0.3, 0.6, 0.9, 1],
  },
};

export const datatwo = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
  ];
  export const optionstwo = {
    region: "002", // Africa
    colorAxis: { colors: ["#ffffff", "black", "#27adfc"] },
    backgroundColor: "#fff",
    datalessRegionColor: "#27adfc",
    defaultColor: "#f5f5f5",
  };

const Home = () => {
  return (
    <div className="dash-home">
      <div className="highlights">
        <div>
          <span>
            <FontAwesomeIcon icon={faBox} />
            <p>Products</p>
          </span>{" "}
          {Math.floor(Math.random() * 1000)}
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>Total Orders</p>
          </span>{" "}
          {Math.floor(Math.random() * 1000)}
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon={faUsers} />
            <p>Customers</p>
          </span>{" "}
          {Math.floor(Math.random() * 1000)}
        </div>
      </div>
      <div className="areachart">
          <h4>Market Overview</h4>
        <Chart
          chartType="AreaChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
      <div className="geochart">
        <div>
          <h4>Map Distribution</h4>

        <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="300px"
      data={datatwo}
      options={optionstwo}
    />
        </div>
        <div className="newcustomer">
          <h4>Visitor Profile</h4>
          <p>{Math.floor(Math.random()*90)}</p>
          <h5>New Customers</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;

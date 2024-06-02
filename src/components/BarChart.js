import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

const chartSetting = {
  yAxis: [{ tickSize: 100 }],
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0px)",
    },
  },
};
const dataset = [
  {
    Revenue: 50,
    COGS: 200,
    "Gross Profit": 100,
    Year: "2015-16",
  },
  {
    Revenue: 160,
    COGS: 300,
    "Gross Profit": 120,
    Year: "2016-17",
  },
  {
    Revenue: 90,
    COGS: 150,
    "Gross Profit": 100,
    Year: "2017-18",
  },
  {
    Revenue: 97,
    COGS: 117,
    "Gross Profit": 100,
    Year: "2018-19",
  },
  {
    Revenue: 50,
    COGS: 200,
    "Gross Profit": 100,
    Year: "2019-20",
  },
  {
    Revenue: 160,
    COGS: 400,
    "Gross Profit": 120,
    Year: "2020-21",
  },
  {
    Revenue: 90,
    COGS: 150,
    "Gross Profit": 100,
    Year: "2021-22",
  },
  {
    Revenue: 97,
    COGS: 117,
    "Gross Profit": 100,
    Year: "2022-23",
  },
];

const valueFormatter = (value) => `${value}`;

const BarsDataset = () => {
  return (
    <BarChart
      grid={{ vertical: true, horizontal: true }}
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "Year" }]}
      yAxis={[{ scaleType: "linear", tickMinStep: 100 }]}
      series={[
        {
          dataKey: "Revenue",
          label: "Revenue",
          valueFormatter,
          color: "#B685DB",
        },
        { dataKey: "COGS", label: "COGS", valueFormatter, color: "#03B1F1" },
        {
          dataKey: "Gross Profit",
          label: "Gross Profit",
          valueFormatter,
          color: "#EC7E31",
        },
      ]}
      {...chartSetting}
    />
  );
};

export default BarsDataset;

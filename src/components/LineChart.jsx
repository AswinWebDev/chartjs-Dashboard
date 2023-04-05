import { Line } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";
import { TimeData, TimeDataTwo } from "../Data";
import { Typography } from "@mui/material";
const timeData = {
  labels: TimeData.map((data) => data.month),
  datasets: [
    {
      label: "Time Data 1",
      data: TimeData.map((data) => data.hours),
      backgroundColor: [" #99ebff"],
      borderColor: "#99ebff",
      tension: 0.4,
    },
    {
      label: "Time Data 2",
      data: TimeDataTwo.map((data) => data.hours),
      backgroundColor: ["#2d2d86"],
      borderColor: "#2d2d86",
      tension: 0.4,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0, // hides the points on the line chart
    },
  },
  scales: {
    y: {
      min: 0,
      max: 10,
      grid: {
        color: "#e6eeff", // sets the color of the grid lines
      },
    },
    x: {
      grid: {
        color: "#e6eeff", // sets the color of the grid lines
      },
    },
  },
};

const LineChart = () => {
  return (
    <div style={{ minWidth: 520 }}>
      <Typography variant="h6">Daily Time Log Activity</Typography>
      <Typography variant="caption" sx={{ opacity: 0.5 }}>
        Today vs Yesterday
      </Typography>
      <div style={{ marginTop: "15px" }}></div>
      <Line data={timeData} options={options} />;
    </div>
  );
};

export default LineChart;

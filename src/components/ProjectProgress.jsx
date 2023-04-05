import { Line } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";
import { TimeData, TimeDataTwo } from "../Data";
import { Typography } from "@mui/material";
const timeData = {
  labels: TimeData.map((data) => data.month),
  datasets: [
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
      display: false, // hides the y axis and its values
    },
    x: {
      display: false, // hides the x axis and its values
    },
  },
};

const ProjectProgress = () => {
  return (
    <div
      style={{
        width: 250,
        height: "12vh",
        padding: "30px",
        paddingBottom: "65px",
        backgroundColor: "white",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="caption" fontWeight="bold">
          Project Progress
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "10px",
            padding: "5px",
            backgroundColor: "#ccffdd",
            color: "#006622",
          }}
        >
          On Track
        </Typography>
      </div>
      <div style={{ marginTop: "15px" }}></div>
      <Line data={timeData} options={options} />;
    </div>
  );
};

export default ProjectProgress;

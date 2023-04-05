import { Bar } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";
import { UserData } from "../Data";
import { Typography } from "@mui/material";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

const userData = {
  labels: UserData.map((data) => data.year),
  datasets: [
    {
      label: "Users gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [" #99ebff", "#2d2d86"],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100000,
      ticks: {
        display: false, // hides the values on the y-axis
      },
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

const BarChart = () => {
  return (
    <div style={{ maxWidth: 280 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Weekly Invoices</Typography>
        <div
          style={{
            border: "1px solid #ffffff",
            borderRadius: "40%",

            padding: "10px",
            backgroundColor: "#ffffff",
            color: "#2d2d86",
          }}
        >
          <IndeterminateCheckBoxOutlinedIcon />
        </div>
      </div>
      <Typography variant="caption" sx={{ opacity: 0.5 }}>
        From 12 Oct - 24 Nov
      </Typography>
      <div style={{ marginTop: "15px" }}></div>
      <Bar data={userData} options={options} />
      {/* max and min */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* max */}
          <div
            style={{
              border: "1px solid #ffffff",
              borderRadius: "15%",

              // height: "20px",
              paddingTop: "15px",
              paddingBottom: "15px",
              paddingLeft: "20px",
              paddingRight: "20px",
              backgroundColor: "#ffffff",
              color: "#2d2d86",
              marginRight: "10px",
            }}
          ></div>
          <div>
            <Typography
              variant="caption"
              sx={{ opacity: 0.7, color: "#2d2d86" }}
              fontSize={"small"}
            >
              Maximum
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#2d2d86" }}
              fontSize={"small"}
            >
              24,170
            </Typography>
          </div>
        </div>
        {/* min */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* max */}
          <div
            style={{
              border: "1px solid #ffffff",
              borderRadius: "15%",

              // height: "20px",
              paddingTop: "15px",
              paddingBottom: "15px",
              paddingLeft: "20px",
              paddingRight: "20px",
              backgroundColor: "#ffffff",
              color: "#2d2d86",
              marginRight: "10px",
            }}
          ></div>
          <div>
            <Typography
              variant="caption"
              sx={{ opacity: 0.7, color: "#2d2d86" }}
              fontSize={"small"}
            >
              Minimum
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#2d2d86" }}
              fontSize={"small"}
            >
              28,120
            </Typography>
          </div>
        </div>
      </div>
      {/* max and min */}
    </div>
  );
};

export default BarChart;

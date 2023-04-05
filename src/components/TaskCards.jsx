import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import { Typography } from "@mui/material";
import InvertColorsRoundedIcon from "@mui/icons-material/InvertColorsRounded";
import TourIcon from "@mui/icons-material/Tour";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";
const TaskCards = () => {
  return (
    <div
      className="taskCardContainer"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      {/* 1st task */}
      <div
        style={{
          border: "1px solid #ffffff",
          borderRadius: "15%",

          // height: "20px",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
          paddingRight: "4rem",
          backgroundColor: "#ffffff",
          color: "#2d2d86",
          // marginRight: "10px",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <GroupWorkOutlinedIcon
            fontSize="small"
            sx={{
              padding: "5px",
              backgroundColor: "#e6eeff",
              borderRadius: "50%",
            }}
          />
        </div>
        <Typography variant="subtitle1" sx={{ opacity: 0.5, fontSize: "12px" }}>
          TASKS
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ opacity: 0.5, fontSize: "12px", marginBottom: "15px" }}
        >
          COMPLETED
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          27
        </Typography>
        <Typography variant="caption" color={"red"} fontSize={10}>
          -12%
        </Typography>
      </div>
      {/* 2nd task*/}
      <div
        style={{
          border: "1px solid #ffffff",
          borderRadius: "15%",

          // height: "20px",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
          paddingRight: "4rem",
          backgroundColor: "#ffffff",
          color: "#2d2d86",
          // marginRight: "10px",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <InvertColorsRoundedIcon
            fontSize="small"
            sx={{
              padding: "5px",
              backgroundColor: "#e6eeff",
              borderRadius: "50%",
              color: "green",
            }}
          />
        </div>
        <Typography variant="subtitle1" sx={{ opacity: 0.5, fontSize: "12px" }}>
          TASKS
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ opacity: 0.5, fontSize: "12px", marginBottom: "15px" }}
        >
          COMPLETED
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          45
        </Typography>
        <Typography variant="caption" color={"green"} fontSize={10}>
          +8%
        </Typography>
      </div>
      {/* 3rd task */}
      <div
        style={{
          border: "1px solid #ffffff",
          borderRadius: "15%",

          // height: "20px",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
          paddingRight: "4rem",
          backgroundColor: "#ffffff",
          color: "#2d2d86",
          // marginRight: "10px",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <TourIcon
            fontSize="small"
            sx={{
              padding: "5px",
              backgroundColor: "#e6eeff",
              borderRadius: "50%",
              color: " #8080ff",
            }}
          />
        </div>
        <Typography variant="subtitle1" sx={{ opacity: 0.5, fontSize: "12px" }}>
          TASKS
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ opacity: 0.5, fontSize: "12px", marginBottom: "15px" }}
        >
          COMPLETED
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          24
        </Typography>
        <Typography variant="caption" color={"red"} fontSize={10}>
          -4%
        </Typography>
      </div>
      {/* 4th task */}
      <div
        style={{
          border: "1px solid #ffffff",
          borderRadius: "15%",

          // height: "20px",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
          paddingRight: "4rem",
          backgroundColor: "#ffffff",
          color: "#2d2d86",
          // marginRight: "10px",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <StairsOutlinedIcon
            fontSize="small"
            sx={{
              padding: "5px",
              backgroundColor: "#e6eeff",
              borderRadius: "50%",
              color: " #ff9933",
            }}
          />
        </div>
        <Typography variant="subtitle1" sx={{ opacity: 0.5, fontSize: "12px" }}>
          TASKS
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ opacity: 0.5, fontSize: "12px", marginBottom: "15px" }}
        >
          COMPLETED
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          61%
        </Typography>
        <Typography variant="caption" color={"green"} fontSize={10}>
          +8%
        </Typography>
      </div>
    </div>
  );
};

export default TaskCards;

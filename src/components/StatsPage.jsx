import { Box, Typography } from "@mui/material";
import React from "react";
import Dropdown from "./Dropdown";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import TaskCards from "./TaskCards";
import LikesAndProgress from "./LikesAndProgress";

const StatsPage = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* flexbox1 */}
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginBottom: "5px" }}
          >
            Stats
          </Typography>
          <Typography variant="caption" sx={{ fontWeight: "bold" }}>
            MONTHLY UPDATES
          </Typography>
          {/* line chart here */}
          <div style={{ marginTop: "40px" }}>
            <LineChart />
          </div>
        </Box>
        {/* flexbox2 */}
        <Box marginLeft={4}>
          <Dropdown />
          {/* bar chart here */}
          <div style={{ marginTop: "40px" }}>
            <BarChart />
          </div>
        </Box>
      </Box>
      <div className="TaskCards">
        <TaskCards />
      </div>
      <div className="likesAndProgress" style={{ marginTop: "25px" }}>
        <LikesAndProgress />
      </div>
    </Box>
  );
};

export default StatsPage;

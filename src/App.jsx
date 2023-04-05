import NavBar from "./components/NavBar";
import StatsPage from "./components/StatsPage";
import { Divider, Typography } from "@mui/material";
import RightBar from "./components/RightBar";

const App = () => {
  return (
    <div
      style={{
        margin: "50px",
        display: "flex",
      }}
    >
      <div>
        <NavBar />
      </div>
      <div style={{ marginLeft: "5rem" }}>
        <StatsPage />
      </div>
      <Divider
        orientation="vertical"
        flexItem
        sx={{ marginLeft: "30px", marginRight: "15px", opacity: 0.5 }}
      />
      <div>
        <RightBar />
      </div>
    </div>
  );
};

export default App;

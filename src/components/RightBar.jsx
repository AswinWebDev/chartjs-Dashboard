import RightBarHeader from "./RightBarHeader";
import { Divider, Fab, Typography } from "@mui/material";
import RightBarComponent from "./RightBarComponent";
import AddIcon from "@mui/icons-material/Add";

const RightBar = () => {
  return (
    <>
      <div>
        <RightBarHeader />
      </div>
      <div style={{ marginTop: "35px", marginBottom: "20px" }}>
        <Typography variant="caption">8:00 am</Typography>
        <Divider sx={{ marginLeft: "50px", opacity: 0.2 }} />
      </div>
      {/* component */}
      <RightBarComponent />
      <RightBarComponent />
      <RightBarComponent />
      {/* component */}
      <div style={{ marginTop: "35px", marginBottom: "20px" }}>
        <Typography variant="caption">8:00 am</Typography>
        <Divider sx={{ marginLeft: "50px", opacity: 0.2 }} />
      </div>
      <RightBarComponent />
      <RightBarComponent />
      <div style={{ marginTop: "35px", marginBottom: "20px" }}>
        <Typography variant="caption">8:00 am</Typography>
        <Divider sx={{ marginLeft: "50px", opacity: 0.2 }} />
      </div>
      <RightBarComponent />
      <RightBarComponent />

      {/* floating button */}
      <Fab
        size="medium"
        aria-label="add"
        sx={{
          backgroundColor: "#3939ac",
          color: "white",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          "&:hover": { backgroundColor: "#3939ac", opacity: 0.8 },
        }}
      >
        <AddIcon />
      </Fab>
      {/* floating button */}
    </>
  );
};

export default RightBar;

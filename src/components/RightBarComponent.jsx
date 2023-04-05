import { Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const RightBarComponent = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "7px",
        maxWidth: "20rem",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "30px",
      }}
    >
      <CallIcon
        sx={{
          fontSize: "15px",
          padding: "5px",
          backgroundColor: "#3939ac",
          color: "white",
          borderRadius: "50%",
        }}
      />
      <div>
        <Typography
          variant="subtitle2"
          sx={{ fontSize: "12px", fontWeight: "bold", opacity: 0.6 }}
        >
          Daniel Cleaning and Care
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="caption"
            sx={{ opacity: 0.6, marginRight: "15px" }}
          >
            8:30 - 9:00
          </Typography>

          <FiberManualRecordIcon
            sx={{ opacity: 0.6, fontSize: "7px", marginRight: "15px" }}
          />

          <Typography variant="caption" sx={{ opacity: 0.6 }}>
            Edward Johnson
          </Typography>
        </div>
      </div>
      <MoreVertIcon sx={{ opacity: 0.6 }} />
    </div>
  );
};

export default RightBarComponent;

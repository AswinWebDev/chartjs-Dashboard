import AlignHorizontalLeftOutlinedIcon from "@mui/icons-material/AlignHorizontalLeftOutlined";
import AlignVerticalBottomOutlinedIcon from "@mui/icons-material/AlignVerticalBottomOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Typography } from "@mui/material";
const RightBarHeader = () => {
  return (
    <div
      className="parent"
      style={{
        minWidth: "30rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="firstChild">
        <AlignHorizontalLeftOutlinedIcon
          fontSize="very small"
          sx={{
            padding: "5px",
            backgroundColor: "#ccddff",
            borderRadius: "4px",
            marginRight: "5px",
          }}
        />
        <AlignVerticalBottomOutlinedIcon
          fontSize="very small"
          sx={{
            padding: "5px",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        />
      </div>
      <div
        className="secondChild"
        style={{ display: "flex", alignItems: "center" }}
      >
        <ArrowBackIosNewOutlinedIcon fontSize="very small" />
        <ArrowForwardIosOutlinedIcon fontSize="very small" />
        <Typography variant="subtitle2" sx={{ marginLeft: "15px" }}>
          Today, 05 April
        </Typography>
      </div>
      <div className="thirdChild">
        <NotificationsActiveIcon fontSize="small" sx={{ marginRight: "5px" }} />
        <MoreVertIcon fontSize="small" />
      </div>
    </div>
  );
};

export default RightBarHeader;

import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ModeStandbyOutlinedIcon from "@mui/icons-material/ModeStandbyOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import PersonIcon from "@mui/icons-material/Person";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        // width: "200px",
        height: "100%",
        backgroundColor: "#ccddff",
        overflowX: "hidden",
        paddingTop: "20px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div
        style={{
          border: "1px solid #2d2d86",
          borderRadius: "50%",
          padding: "10px",
          backgroundColor: "#2d2d86",
          color: "white",
          // marginBottom: "auto",
          marginBottom: "60px",
        }}
      >
        <InsertDriveFileRoundedIcon />
      </div>

      <div>
        <div
          style={{
            border: "1px solid #ffffff",
            borderRadius: "40%",

            padding: "10px",
            backgroundColor: "#ffffff",
            color: "#2d2d86",
            marginBottom: "25px",
          }}
        >
          <HomeOutlinedIcon />
        </div>
        <div
          style={{
            border: "1px solid #2d2d86",
            borderRadius: "40%",

            padding: "10px",
            backgroundColor: "#2d2d86",
            color: "white",
            marginBottom: "25px",
          }}
        >
          <ModeStandbyOutlinedIcon />
        </div>
        <div
          style={{
            border: "1px solid #ffffff",
            borderRadius: "40%",

            padding: "10px",
            backgroundColor: "#ffffff",
            color: "#2d2d86",
            marginBottom: "25px",
          }}
        >
          <FileCopyOutlinedIcon />
        </div>
        <div
          style={{
            border: "1px solid #ffffff",
            borderRadius: "40%",

            padding: "10px",
            backgroundColor: "#ffffff",
            color: "#2d2d86",
            marginBottom: "25px",
          }}
        >
          <MessageOutlinedIcon />
        </div>
        <div
          style={{
            border: "1px solid #ffffff",
            borderRadius: "40%",

            padding: "10px",
            backgroundColor: "#ffffff",
            color: "#2d2d86",
            marginBottom: "25px",
          }}
        >
          <CheckBoxOutlinedIcon />
        </div>
        <div
          style={{
            border: "1px solid #ffffff",
            borderRadius: "40%",

            padding: "10px",
            backgroundColor: "#ffffff",
            color: "#2d2d86",
            marginBottom: "25px",
          }}
        >
          <PersonIcon />
        </div>
      </div>

      <div
        style={{
          // border: "1px solid #ffffff",
          // borderRadius: "40%",
          padding: "10px",
          // backgroundColor: "#ccddff",
          color: "#2d2d86",
          marginTop: "auto",
          marginBottom: "30px",
        }}
      >
        <PowerSettingsNewOutlinedIcon />
      </div>
    </div>
  );
};

export default NavBar;

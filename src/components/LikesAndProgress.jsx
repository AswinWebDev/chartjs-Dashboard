import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import Person2Icon from "@mui/icons-material/Person2";
import KeyIcon from "@mui/icons-material/Key";
import { Typography } from "@mui/material";
import ProjectProgress from "./ProjectProgress";

const LikesAndProgress = () => {
  return (
    <div
      className="parent"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div
        className="fourchild"
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "space-around",
        }}
      >
        <div
          className="FirstTwochild"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            className="firstChild"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              borderRadius: "8%",
              backgroundColor: "white",
              minWidth: "200px",
              marginRight: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <SignLanguageIcon sx={{ opacity: 0.3, marginRight: "8px" }} />
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                Likes
              </Typography>
            </div>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              16
            </Typography>
          </div>
          <div
            className="secondChild"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              borderRadius: "8%",
              backgroundColor: "white",
              minWidth: "200px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <AttachFileOutlinedIcon
                sx={{ opacity: 0.3, marginRight: "8px" }}
              />
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                Attachments
              </Typography>
            </div>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              32
            </Typography>
          </div>
        </div>
        <div
          className="SecondTwochild"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "72px",
          }}
        >
          <div
            className="thirdChild"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              borderRadius: "8%",
              backgroundColor: "white",
              minWidth: "200px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Person2Icon sx={{ opacity: 0.3, marginRight: "8px" }} />
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                Team Members
              </Typography>
            </div>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              24
            </Typography>
          </div>
          <div
            className="fourthChild"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              borderRadius: "8%",
              backgroundColor: "white",
              minWidth: "200px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <KeyIcon sx={{ opacity: 0.3, marginRight: "8px" }} />
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                Access Creds
              </Typography>
            </div>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              40
            </Typography>
          </div>
        </div>
      </div>
      {/* progress here */}
      <div>
        <ProjectProgress />
      </div>
    </div>
  );
};

export default LikesAndProgress;

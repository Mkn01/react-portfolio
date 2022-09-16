import { PageTitle } from "../components/header";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Resume = () => {
  return (
    <div>
      <PageTitle title={"Resume"} />
      <Box
        sx={{
          marginLeft: 60,
          marginRight: 60,
          marginTop: 25,
          backgroundColor: "#f6bdd1ff",
          textAlign: "center",
        }}
      >
        <Typography sx={{ color: "#16123f" }}>
          If you would like to view my full set of skills, projects and work
          history, you can download the CV from{" "}
          <a
            sx={{
              color: "#16123f",
              textDecoration: "none",
              "& :hover": { color: "#ffe26a" },
            }}
            href="./components/assets/cv/Gurmanpreet Nagra 2022 (5).pdf"
            download="Gurmanpreet Nagra 2022.pdf"
          >
            here
          </a>
        </Typography>
      </Box>
    </div>
  );
};

export default Resume;

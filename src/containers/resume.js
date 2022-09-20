import { PageTitle } from "../components/header";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Resume = () => {
  return (
    <div>
      <PageTitle title={"Resume"} />
      <Box
        sx={{
          marginTop: 25,
          backgroundColor: "#f6bdd1ff",
          textAlign: "center",
        }}
      >
        <Typography sx={{ color: "#16123f" }}>
          If you would like to view my full set of skills, projects and work
          history, you can from {""}
          <a
            sx={{
              marginLeft: 9,
              color: "#16123f",
              textDecoration: "none",
              "& :hover": { color: "#ffe26a" },
            }}
            href="https://docs.google.com/document/d/1FVegwLTGV_TrAracnoNP1nCRcc-gNyMZ/edit?usp=sharing&ouid=108889175675500067535&rtpof=true&sd=true"
          >
            here
          </a>
        </Typography>
      </Box>
    </div>
  );
};

export default Resume;

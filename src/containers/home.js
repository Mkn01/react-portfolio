import { Avatar, Box, Paper } from "@mui/material";

import { PageTitle } from "../components/header";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import photo from "../components/assets/images/g.n.jpg";

const HomePage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  return (
    <Box>
      <PageTitle title={"Welcome"} />

      <Avatar
        src={photo}
        alt="Gurmanpreet Nagra"
        sx={{
          marginRight: isMobile ? 0 : 110,
          marginLeft: isMobile ? 17 : 30,
          marginTop: 3,
          width: isMobile ? 89 : 400,
          height: isMobile ? 90 : 400,
        }}
      />
      <Paper
        sx={{
          marginLeft: isMobile ? 0 : 100,
          marginRight: isMobile ? 0 : 2,
          marginTop: -40,

          textAlign: "center",
        }}
      >
        <h4>
          A full stack web developer seeking new challenges where I will be able
          to utilize my skills and develop my abilities. Feel free to checkout
          my projects to see the work i've done so far.
        </h4>
      </Paper>

      <Stack
        sx={{
          marginLeft: isMobile ? 0 : 110,
          marginTop: 8,
          justifyContent: "space-around",
        }}
      >
        {/* <Button href="/portfolio">My Projects</Button>
        <Button onSubmit={navigate("/contact")}>Connect</Button> */}
      </Stack>
    </Box>
  );
};

export default HomePage;

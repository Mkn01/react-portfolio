import { Box, Paper } from "@mui/material";

import { PageTitle } from "../components/header";

import useMediaQuery from "@mui/material/useMediaQuery";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

const HomePage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <PageTitle title={"Welcome"} />
      <Paper
        sx={{
          marginLeft: isMobile ? 0 : 110,
          marginRight: isMobile ? 0 : 2,
          marginTop: 2,
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
          marginTop: 2,
          justifyContent: "space-around",
        }}
      >
        <Button>My Projects</Button>
        <Button>Connect</Button>
      </Stack>
    </Box>
  );
};

export default HomePage;

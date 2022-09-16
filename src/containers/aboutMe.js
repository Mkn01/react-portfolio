import { Stack } from "@mui/system";
import { PageTitle } from "../components/header";
import { ProjectCards } from "../components/project";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import getProjectItems from "../components/utils/projectCards";
import weatherDashboard from "../components/assets/images/weather-dash.avif";
import placeholder from "../components/assets/images/kelly-sikkema-lJrTJHzQjOs-unsplash.jpg";
const PortfolioPage = () => {
  const projectItems = getProjectItems;
  return (
    <Stack>
      <PageTitle title={"My Projects"} />
      <Box sx={{ flexGrow: 1, marginBottom: 9, marginLeft: 10 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <ProjectCards title="Weather Dashboard" image={weatherDashboard} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards title="Book Search Engine" image={placeholder} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards title="Text Editor" image={placeholder} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards title="Social Network API" image={placeholder} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards title="Portfolio" image={placeholder} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards title="E-Commerce Back End" image={placeholder} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards title="Note Taker" image={placeholder} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards title="Team Profile Generator" image={placeholder} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards title="Good README Generator" image={placeholder} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards title="Day Planner" image={placeholder} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards title="Code Quiz" image={placeholder} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards title="Password Generator" image={placeholder} />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards title="Code Refactor" image={placeholder} />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default PortfolioPage;

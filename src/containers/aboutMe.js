import { Stack } from "@mui/system";
import { PageTitle } from "../components/header";
import { ProjectCards } from "../components/project";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";

import weatherDashboard from "../components/assets/images/weather-dash.avif";
import placeholder from "../components/assets/images/kelly-sikkema-lJrTJHzQjOs-unsplash.jpg";
const PortfolioPage = () => {
  return (
    <Stack>
      <PageTitle title={"My Projects"} />
      <Box sx={{ flexGrow: 1, marginBottom: 9, marginLeft: 10 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <ProjectCards
              title="Event Planning"
              img={weatherDashboard}
              githubRepo={"https://github.com/Am0031/event-planning"}
              deployedPage={"https://am0031.github.io/event-planning/"}
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards
              title="Event Finder"
              img={weatherDashboard}
              githubRepo={" https://github.com/talexandru1987/event-finder"}
              deployedPage={"https://what-is-on.herokuapp.com/"}
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards
              title="We Care"
              img={weatherDashboard}
              githubRepo={" https://github.com/C-Sim/we-care-react"}
              deployedPage={"https://fathomless-bayou-99698.herokuapp.com/"}
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards
              title="Weather Dashboard"
              img={weatherDashboard}
              githubRepo={"https://github.com/Mkn01/weather-dashboard/tree/dev"}
              deployedPage={"https://mkn01.github.io/weather-dashboard/"}
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards
              title="Book Search Engine"
              img={placeholder}
              githubRepo={
                "https://github.com/Mkn01/book-search-engine/tree/dev"
              }
              deployedPage={"https://tranquil-ridge-39247.herokuapp.com/"}
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards
              title="Text Editor"
              img={placeholder}
              githubRepo={"https://github.com/Mkn01/text-editor/tree/dev"}
              deployedPage={"https://a-text-editor.herokuapp.com/"}
            />
          </Grid>

          <Grid item xs={6}>
            <ProjectCards
              title="Social Network API"
              img={placeholder}
              githubRepo={
                "https://drive.google.com/file/d/1bW966iGF596aOc9ByS7CXtLECpl-jGXv/view"
              }
              deployedPage={
                "https://mkn01.github.io/random-password-generator/"
              }
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards
              title="Portfolio"
              img={placeholder}
              githubRepo={"https://github.com/Mkn01/portfolio/tree/update"}
              deployedPage={"https://mkn01.github.io/portfolio/"}
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards
              title="E-Commerce Back End"
              img={placeholder}
              githubRepo={"https://github.com/Mkn01/E-Commerce/tree/dev"}
              deployedPage={
                "https://drive.google.com/file/d/1dUic5PZnrfdoJ2wfD2Xltn4EPs5kpqLj/view"
              }
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards
              title="Note Taker"
              img={placeholder}
              githubRepo={"https://github.com/Mkn01/notes-creator/tree/dev"}
              deployedPage={"https://notes-creator.herokuapp.com/"}
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards
              title="Team Profile Generator"
              img={placeholder}
              githubRepo={
                "https://github.com/Mkn01/company-team-profile-app/tree/dev"
              }
              deployedPage={
                "https://drive.google.com/file/d/1AoM2bt5BxP89XPgT1wqZGW_MG9_qDTod/view"
              }
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards
              title="Good README Generator"
              img={placeholder}
              githubRepo={
                "https://github.com/Mkn01/professional-readme-generator"
              }
              deployedPage={
                "https://drive.google.com/file/d/1XXO0Utj9kZU5f7W6dOuw66GTPpbxDnve/view"
              }
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards
              title="Day Planner"
              img={placeholder}
              githubRepo={"https://github.com/Mkn01/day-planner/tree/dev"}
              deployedPage={"https://mkn01.github.io/day-planner/"}
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards
              title="Code Quiz"
              img={placeholder}
              githubRepo={"https://github.com/Mkn01/code-quiz/tree/dev"}
              deployedPage={"https://mkn01.github.io/code-quiz/"}
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards
              title="Password Generator"
              img={placeholder}
              githubRepo={
                "https://github.com/Mkn01/random-password-generator/tree/dev"
              }
              deployedPage={
                "https://mkn01.github.io/random-password-generator/"
              }
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectCards
              title="Code Refactor"
              img={placeholder}
              githubRepo={
                "https://github.com/Mkn01/marketing-agency-refactor/tree/dev"
              }
              deployedPage={
                "https://mkn01.github.io/marketing-agency-refactor/"
              }
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default PortfolioPage;

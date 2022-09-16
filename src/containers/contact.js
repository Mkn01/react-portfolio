import { PageTitle } from "../components/header";
import { Box } from "@mui/system";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Icon } from "@mui/material";
import { Padding } from "@mui/icons-material";
const Contact = () => {
  return (
    <div>
      <PageTitle title={"Contact"} />
      <Box
        backgroundColor="#c98986ff"
        sx={{ marginLeft: 50, marginRight: 50, marginTop: 8, Padding: 10 }}
      >
        <Link
          href="https://github.com/Mkn01"
          target="_blank"
          color="inherit"
          sx={{
            pr: 4,
            "& :hover": { color: "#ffe26a" },
          }}
        >
          <GitHubIcon fontSize="large" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/gurmanpreet-nagra/"
          target="_blank"
          color="inherit"
          sx={{ "& :hover": { color: "#ffe26a" } }}
        >
          <LinkedInIcon fontSize="large" />
        </Link>
      </Box>
    </div>
  );
};

export default Contact;

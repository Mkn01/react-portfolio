import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
export const ProjectCards = ({
  img,
  title,
  text,
  githubRepo,
  deployedPage,
  alt,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
      <CardMedia component="img" height="250" image={img} alt={alt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Divider></Divider>
        <Grid item xs={6}>
          <Link
            href={githubRepo}
            target="_blank"
            color="#16123f"
            sx={{ textDecoration: "none" }}
          >
            <GitHubIcon />
            <Typography variant="body2"> Github Repo</Typography>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link
            href={deployedPage}
            target="_blank"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            <OpenInBrowserIcon />
            <Typography variant="body2">Deployed page</Typography>
          </Link>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
    // <Box
    //   sx={{
    //     minWidth: "400px",
    //   }}
    // >
    //   <Card
    //     sx={{
    //       maxWidth: "100%",

    //       m: 2,
    //     }}
    //   >
    //     <Typography
    //       variant="h6"
    //       sx={{
    //         backgroundColor: "  #8b575cff",
    //         textAlign: "center",
    //         color: "#16123f",
    //       }}
    //     >
    //       {title}
    //     </Typography>
    //     <CardMedia
    //       sx={{ alignItems: "center", objectFit: "contain" }}
    //       height="140"
    //       component="img"
    //       image={img}
    //       alt={title}
    //     />
    //     <Divider />
    //     <Grid
    //       container
    //       rowSpacing={{ xs: 1, sm: 2, md: 3 }}
    //       sx={{ paddingTop: "6px" }}
    //     >
    //       <Grid item xs={6}>
    //         <Link
    //           href={githubRepo}
    //           target="_blank"
    //           color="#16123f"
    //           sx={{ textDecoration: "none" }}
    //         >
    //           <GitHubIcon />
    //           <Typography variant="body2"> Github Repo</Typography>
    //         </Link>
    //       </Grid>

    //       <Grid item xs={6}>
    //         <Link
    //           href={deployedPage}
    //           target="_blank"
    //           color="inherit"
    //           sx={{ textDecoration: "none" }}
    //         >
    //           <OpenInBrowserIcon />
    //           <Typography variant="body2">Deployed page</Typography>
    //         </Link>
    //       </Grid>
    //     </Grid>
    //   </Card>
    // </Box>
  );
};

import { PageTitle } from "../components/header";
import { Box } from "@mui/system";

import { Icon } from "@mui/material";
const Contact = () => {
  return (
    <div>
      <PageTitle title={"Contact"} />
      <Box
        backgroundColor="#c98986ff"
        sx={{ marginLeft: 50, marginRight: 50, marginTop: 8 }}
      >
        <Icon />
        <Icon />
        <Icon />
      </Box>
    </div>
  );
};

export default Contact;

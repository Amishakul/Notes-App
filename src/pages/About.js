import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
          "@media (min-width:300px)": {
            mt: 0,
            "& h3 ": {
              fontSize: "1.2rem",
            },
          },
        }}
      >
      <br/>
      <br/>
      <br/>
<Typography variant="h4">About</Typography>
<center>
<br/>
<br/>
  <p style={{ textAlign: 'center' }}>
    We aim to provide easy-to-understand notes for the students to help them in their exam preparations.
  </p>
</center>
<br />
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br />
<br />


</Box>

    </Layout>
  );
};

export default About;

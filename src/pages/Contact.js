import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

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
      <br/>
        <Typography variant="h4">Feel free to contact us on the below detail</Typography>
        <br/>
        <br/>
        <center>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <MailIcon sx={{ color: 'skyblue', pt: 0 }} />
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=vasundharachintan123@gmail.com`} target="_blank" rel="noopener noreferrer">
              <b style={{ marginLeft: '8px' }}>vasundharachintan123@gmail.com</b>
            </a>
          </div>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        
      </Box>
    </Layout>
  );
};

export default About;

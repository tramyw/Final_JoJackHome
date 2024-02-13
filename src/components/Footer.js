import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FB from "../SocialMediaIcons/FB.svg";
import IG from "../SocialMediaIcons/IG.svg";
import X from "../SocialMediaIcons/X.svg";
import outlinejojachomelogo from "../Outline_jojachome.png";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "350px",
        backgroundColor: "#F0FFCE",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100%" }}
        >
          <Grid item>
            <img
              src={outlinejojachomelogo}
              alt="JoJacHome Logo"
              style={{ width: "80px", height: "auto", marginTop: "20px" }}
            />
          </Grid>
          <br />
          <Grid item sx={{ textAlign: "center" }}>
            <Typography color="#A53F2B" variant="h5">
              祖積家
            </Typography>
            <Typography color="#000000" sx={{ fontSize: "14px" }}>
              "俾小動物一個家！"
            </Typography>
          </Grid>
          <br />
          <Grid item sx={{ marginBottom: "1rem" }}>
            <Grid
              container
              display="flex"
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item justifyContent="center" mt={3}>
                <a href="https://www.facebook.com/">
                  <img
                    src={FB}
                    alt="Facebook Icon"
                    style={{ width: "30px", height: "30px" }}
                    className={style["social-icon"]}
                  />
                </a>
              </Grid>
              <Grid item justifyContent="center" mt={3}>
                <a href="https://www.instagram.com/">
                  <img
                    src={IG}
                    alt="Instagram Icon"
                    style={{ width: "30px", height: "30px" }}
                    className={style["social-icon"]}
                  />
                </a>
              </Grid>
              <Grid item justifyContent="center" mt={3}>
                <a href="https://twitter.com/home/">
                  <img
                    src={X}
                    alt="X Icon"
                    style={{ width: "30px", height: "30px" }}
                    className={style["social-icon"]}
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Grid item>
            <Typography
              color="#000000"
              variant="subtitle1"
              align="center"
              sx={{ fontSize: "14px", marginTop: "0px", textAlign: "center" }}
            >
              到底啦！Subscribe我哋Social Media, 了解最新&更多資訊！
            </Typography>
            <br />
            <Typography
              color="#808080"
              variant="subtitle1"
              sx={{
                fontSize: "12px",
                marginBottom: "10px",
                marginTop: "0px",
                textAlign: "center",
              }}
            >
              &copy; {new Date().getFullYear()} JoJackHome Love Unlimited
              Company 祖積家愛心無限公司 | All Rights Reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

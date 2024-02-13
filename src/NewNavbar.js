import React, { useState } from "react";
import {
  Stack,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Drawercomp from "./Drawer_NewNavBar.js";
import { Link } from "react-router-dom";
import Logo from "./jojachomelogo.png";

const pages = [
  { 主頁: "Home" },
  { 關於我們: "About_us" },
  { 領養: "Category_Page" },
];
const objKeys = pages.map((el) => Object.keys(el));
const objValues = pages.map((el) => Object.values(el));

const PAGES = ["主頁", "關於我們", "領養動物"];
function Navbar() {
  const [value, setValue] = useState();
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("md"));
  console.log(pages);
  return (
    <AppBar position="static" sx={{ background: "#F0FFCE" }}>
      <Toolbar>
        <Link to={{ pathname: `/Home` }} style={{ textDecoration: "none" }}>
          <Box
            mt={2}
            mb={2}
            m1={2}
            component="img"
            sx={{
              height: 50,
              display: "flex",
              justifyContent: "centre",
              alignItems: "center",
              marginRight: "12px",
            }}
            alt="JoJacHomeLogo"
            src={Logo}
            className="JoJacHomeLogo"
          />
        </Link>
        <Link to={{ pathname: `/Home` }} style={{ textDecoration: "none" }}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#A53F2B",
              textDecoration: "none",
            }}
          >
            祖積家
          </Typography>
        </Link>

        {responsive ? (
          <>
            <Drawercomp />
          </>
        ) : (
          <>
            <Tabs sx={{ marginLeft: "auto" }}>
              {pages.map((page, index) => (
                <Link
                  style={{ textDecoration: "none" }}
                  key={index}
                  to={`/${Object.values(page)}`}
                >
                  <Tab
                    key={index}
                    label={Object.keys(page)}
                    sx={{
                      color: "#584D3D",
                      fontWeight: 600,
                    }}
                  />
                </Link>
              ))}
            </Tabs>

            <Stack direction="row" mt={2} mb={2} ml={2} spacing={3}>
              <Link
                to={{
                  pathname: "/Adoption_Info_Page",
                }}
                rel="noopener noreferrer"
              >
                <Button
                  sx={{
                    marginLeft: "auto",
                    color: "#2364AA",
                    background: "#9ED3F8",
                    "&:hover": {
                      background: "#EFEBCE",
                    },
                  }}
                  variant="contained"
                >
                  領養須知
                </Button>
              </Link>
              <Button
                sx={{
                  marginLeft: "20px",
                  color: "#2364AA",
                  background: "#9ED3F8",
                  "&:hover": {
                    background: "#EFEBCE",
                  },
                }}
                variant="contained"
                href="https://forms.gle/HESZBGAgCoJqW2xp9"
              >
                登記待領動物
              </Button>
              <Button
                sx={{
                  marginLeft: "20px",
                  color: "#2364AA",
                  background: "#9ED3F8",
                  "&:hover": {
                    background: "#EFEBCE",
                  },
                }}
                variant="contained"
                href="https://docs.google.com/forms/d/e/1FAIpQLScomQJmP_29GITVpcB5ipMJGoQhDMGBElZc-WtsRhrLRC2tbw/viewform?usp=sharing"
              >
                報失寵物
              </Button>
            </Stack>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

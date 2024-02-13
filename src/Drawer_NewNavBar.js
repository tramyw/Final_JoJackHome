import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { Link } from "react-router-dom";

const navButton = [
  { 登記待領動物: "https://forms.gle/HESZBGAgCoJqW2xp9" },
  {
    報失寵物:
      "https://docs.google.com/forms/d/e/1FAIpQLScomQJmP_29GITVpcB5ipMJGoQhDMGBElZc-WtsRhrLRC2tbw/viewform?usp=sharing",
  },
];

const pages = [
  { 主頁: "Home" },
  { 關於我們: "About_us" },
  { 領養: "Category_Page" },
  { 領養須知: "Adoption_Info_Page" },
];

const Drawercomp = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>
        <List sx={{ width: 130, margin: "5px" }}>
          {pages.map((page, index) => (
            <ListItemButton onClick={() => setopenDrawer(false)} key={index}>
              <ListItemIcon>
                <Link
                  style={{ textDecoration: "none" }}
                  key={Object.values(page)}
                  to={`/${Object.values(page)}`}
                >
                  <ListItemText sx={{ color: "#A53F2B" }}>
                    {Object.keys(page)}
                  </ListItemText>
                </Link>
              </ListItemIcon>
            </ListItemButton>
          ))}
          {navButton.map((navbtn, index) => (
            <ListItemButton onClick={() => setopenDrawer(false)} key={index}>
              <ListItemIcon>
                <a
                  href={`${Object.values(navbtn)}`}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemText sx={{ color: "#A53F2B" }}>
                    {Object.keys(navbtn)}
                  </ListItemText>
                </a>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setopenDrawer(!openDrawer)}
      >
        <MenuTwoToneIcon sx={{ color: "#A53F2B" }} />
      </IconButton>
    </React.Fragment>
  );
};

export default Drawercomp;

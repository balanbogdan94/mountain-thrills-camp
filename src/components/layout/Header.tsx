"use client";
import {
  Box,
  List,
  ListItem,
  Drawer,
  AppBar,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import Link from "next/link";
import style from "./Header.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { getRouteList } from "@/models/Routes";
import { useTranslation } from "next-i18next";

const MenuList = () => {
  // ? TODO: See if we can replace useRouter
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <List className={`${style.menuItems}`}>
      {getRouteList.map((item) => (
        <ListItem key={item.name} disablePadding>
          <Link
            className={
              router.pathname === item.path ? style.activeMenuItem : ""
            }
            style={{ wordWrap: "unset" }}
            href={item.path}
          >
            {t(item.translationKey)}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar component="nav" className={style.headerContainer}>
        <Toolbar>
          <Image src={"/logo.svg"} alt="logo" width={90} height={90} />
          <IconButton
            className={`${style.menuContent} ${style.hamburger}`}
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <div className={`${style.menuLinkContainer} ${style.menuContent}`}>
            <MenuList />
          </div>
        </Toolbar>
      </AppBar>
      <Box>
        {/* {TODO: align nice the menu items} */}
        <Drawer
          variant="temporary"
          anchor="top"
          open={mobileOpen}
          transitionDuration={1000}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            marginTop: "64px",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          <div
            className={style.hamburgerMenuContent}
            onClick={handleDrawerToggle}
          >
            <MenuList />
          </div>
        </Drawer>
      </Box>
    </>
  );
};

export default Header;

import type { FC } from "react";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@mui/material";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface NavigationItem {
  name: string;
  href: string;
}

interface HeaderProps {
  navigation: NavigationItem[];
}

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/#" },
  { name: "Contactanos", href: "/#" },
];

export const Header: FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };

  return (
    <>
      <AppBar position="fixed" color="default" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/">
                <span
                  style={{
                    cursor: "pointer",
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  Inicio
                </span>
              </Link>
            </Typography>
            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              sx={{ display: { md: "none" } }}
              onClick={toggleDrawer(true)}
              style={{ color: "#000" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <div
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                style={{ backgroundColor: "#000", height: "100vh" }}
              >
                <List>
                  {navigation.map((item: { name: string; href: string }) => (
                    <Link href={item.href} key={item.name}>
                      <ListItem button>
                        <ListItemText
                          primary={item.name}
                          style={{ color: "#fff" }}
                        />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </div>
            </Drawer>
            <div className="hidden lg:block">
              <div className="flex items-baseline space-x-4">
                {navigation.map((item: { name: string; href: string }) => (
                  <Link href={item.href} key={item.name}>
                    <span
                      style={{
                        cursor: "pointer",
                        color: "#666",
                        fontWeight: "medium",
                        fontSize: "1rem",
                      }}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};

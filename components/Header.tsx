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
      <AppBar position="fixed" className="bg-white dark:bg-black" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/">
                <span className="dark:text-white text-black font-bold text-lg">
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
              className="dark:text-white text-black"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <div
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                className="bg-white dark:bg-black h-screen"
              >
                <List>
                  {navigation.map((item: { name: string; href: string }) => (
                    <Link href={item.href} key={item.name}>
                      <ListItem>
                        <ListItemText
                          primary={item.name}
                          className="text-black dark:text-white"
                        />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </div>
            </Drawer>
            <div className="hidden lg:block bg-white dark:bg-black">
              <div className="flex items-baseline space-x-4">
                {navigation.map((item: { name: string; href: string }) => (
                  <Link href={item.href} key={item.name}>
                    <span className="text-neutral-400 hover:text-black dark:hover:text-white px-3 py-2  text-sm font-medium">
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

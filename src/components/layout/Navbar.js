import React from "react";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography style={{ flexGrow: 1 }} variant="h6">
          Portfolio
        </Typography>
        <Button href="#about">About</Button>
        <Button href="#skills">Skills</Button>
        <Button href="#works">Projects</Button>
        <Button>Contact Me</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

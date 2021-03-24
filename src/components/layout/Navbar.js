import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#fff",
    padding: "20px 40px",
    color: "#000"
  },
  name: {
    fontSize: "3rem",
    fontFamily: ["Pacifico", "cursive"].join(","),
    flexGrow: "1"
  },
  button: {
    fontSize: "1.1rem",
    marginRight: theme.spacing(2)
  }
}));

const Navbar = () => {
  const style = useStyles();
  return (
    <AppBar className={style.root} position="fixed">
      <Container>
        <Toolbar>
          <Typography className={style.name} variant="h3">
            <a href="#home" className={style.name}>
              H K
            </a>
          </Typography>
          <Button href="#about" className={style.button}>
            About
          </Button>
          <Button href="#skills" className={style.button}>
            Skills
          </Button>
          <Button href="#works" className={style.button}>
            Projects
          </Button>
          <Button href="#contact" className={style.button}>
            Contact Me
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

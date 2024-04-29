

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from 'react-router-dom';

import {
    List,
    ListItem,
    ListItemText,
    Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    signInButton: {
        marginLeft: 'auto', // Push the button to the right
    },
}));

export function TopNav() {
    const classes = useStyles();
    const small = useMediaQuery("(max-width:600px)");
    const full = useMediaQuery("(min-width:600px)");

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar variant="regular" style={{ backgroundColor: "black" }}>
                    {small && (
                        <>
                        <List>
                            <ListItem button>
                                <Button
                                    onClick={handleClick}
                                >
                                    <MenuIcon  color="error" style={{ fontSize: 40 }} />
                                    {open ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )}
                                </Button>
                                <Typography
                                    variant="h6"
                                    
                                    onClick={() => {
                                        console.log("logo clicked");
                                        setOpen(false);
                                    }}
                                >
                                    <img
                                        className="relative w-[237px] h-[57px] object-cover"
                                        alt="BayDevelopsLogo"
                                        src="/img/baydevelopslogo-1-1@2x.png"
                                    />
                                </Typography>
                            </ListItem>
                            <Collapse
                                in={open}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List
                                    component="div"
                                    disablePadding
                                >
                                    <ListItem button  component={Link} to="/" >
                                        <ListItemText primary="Home"/>
                                    </ListItem>
                                    <ListItem button component={Link} to="/about">
                                        <ListItemText primary="About" />
                                    </ListItem>{" "}
                                    <ListItem button component={Link} to="/contact"> 
                                        <ListItemText primary="Contact" />
                                    </ListItem>
                                    <ListItem button component={Link} to="/pricing"> 
                                        <ListItemText primary="Pricing" />
                                    </ListItem>
                                    <ListItem button component={Link} to="/about">
                                        <ListItemText primary="Sign In" />
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </>
                    )}

                    {full && (
                        <>
                            <Typography
                                variant="h6"
                                color="secondary"
                            >
                                <img
                                    className="relative w-[237px] h-[57px] object-cover"
                                    alt="BayDevelopsLogo"
                                    src="/img/baydevelopslogo-1-1@2x.png"
                                />
                            </Typography>
                            <Button color="inherit" component={Link} to="/">
                                Home
                            </Button>
                            <Button color="inherit" component={Link} to="/about">
                                About
                            </Button>
                            <Button color="inherit" component={Link} to="/contact">
                                Contact
                            </Button>
                            <Button color="inherit" component={Link} to="/pricing">
                                Pricing
                            </Button>
                            <Button color="inherit" className={classes.signInButton} component={Link} to="/login" >
                                Sign In
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default TopNav;
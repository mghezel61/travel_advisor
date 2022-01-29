import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Typography, Toolbar, InputBase, Box } from "@material-ui/core";
import { SearchIcon } from "@material-ui/icons";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explorer new Places
          </Typography>
          <Autocomplete>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

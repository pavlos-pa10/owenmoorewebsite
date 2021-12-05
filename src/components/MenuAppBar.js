import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button'
import { withRouter } from "react-router-dom";



const MenuAppBar = props => {
  const { history } = props
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open=Boolean(anchorEl);
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

 

  

  const menuItems = [
    {
      id:"1",
      menuTitle: "Home",
      pageURL: "/"
    },
    {
      id:"2",
      menuTitle: "Contact",
      pageURL: "/contact"
    },
    {
      id:"3",
      menuTitle: "Teaching",
      pageURL: "/teaching"
    },
    {
      id:"4",
      menuTitle: "Gallery",
      pageURL: "/gallery"
    },
    {
      id:"5",
      menuTitle: "Riding",
      pageURL: "/riding"
    },
    {
      id:"6",
      menuTitle: "Testimonials",
      pageURL: "/testimonials"
    },
  ];


  return (
    
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static">
        <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Owen Moore
          </Typography>
          {isMobile? (
            <>
            <IconButton
            edge="start"
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem, index) => {
                  const { id,menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem key={id} onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ):( 
            <div>
               <Button
                variant="contained"
                onClick={() => handleButtonClick("/")}
              >
                HOME
              </Button>
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/teaching")}
              >
                TEACHING
              </Button>
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/riding")}
              >
                RIDING
              </Button>
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/gallery")}
              >
                GALLERY
              </Button>
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/testimonials")}
              >
                TESTIMONIALS
              </Button>
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/contact")}
              >
                CONTACT
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}

export default withRouter(MenuAppBar);
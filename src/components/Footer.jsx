import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BottomNavigation } from '@mui/material';

 const Footer = () => {
  return (
    <div> 
      <Box sx={{ flexGrow: 2 }} >
    <AppBar   position="static"style={{bottom:0, position: 'fixed'}}>
      <Toolbar>
        
        <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
          Contact
        </Typography>
        <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
          HelpDesk
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  <BottomNavigation/></div>
  );
}
export default Footer;

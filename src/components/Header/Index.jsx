import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProfileSection from '../ProfileSection/Index';
import SearchSection from '../SearchSection';
import Logotype from '../../assets/img/DOKI.svg';




const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#ffffff'}} elevation={0}>
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Box>
            <img style={{width: '80px', marginRight: '15px'}} src={Logotype} alt="Logotipo - DOKI" />
            <SearchSection />
          </Box>

          <Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }}>
                      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
              </BottomNavigation>
            </Box>
          </Box>
          
          <Box />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }}>
                      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
              </BottomNavigation>
              <ProfileSection />
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
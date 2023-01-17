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
// import ProfileSection from '../ProfileHeader/Index';
// import SearchSection from '../SearchHeader';
import Logotype from '../../assets/img/DOKI.svg';
import TabSocial from '../Tabs/Index';
import NotificationHeader from './NotificationHeader';
import ProfileSection from './ProfileHeader/Index';
import MessageHeader from './MessageHeader';
import SearchHeader from './SearchHeader';
// import NotificationHeader from './NotificationHeader';

const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  borderRadius: '12px',
  '&:hover': {
    backgroundColor: '#8f7dc726',
    color: theme.palette.primary.main
  }
}));

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({

  '.Mui-selected svg': {
    transition: '0.6s',
    transform: 'rotate(29deg)',
    fontWeight: '700!important'
  }
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
          <Box sx={{display: 'flex'}}>
            <img style={{width: '80px', marginRight: '15px'}} src={Logotype} alt="Logotipo - DOKI" />
            <SearchHeader />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <StyledBottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }}>
                      <StyledBottomNavigationAction href="@" label="Recents" icon={<RestoreIcon />} />
                      <StyledBottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                      <StyledBottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                      <StyledBottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                      <StyledBottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
              </StyledBottomNavigation>
            </Box>
          
          <Box />
            <Box sx={{ display: { xs: 'none', md: 'flex'}, alignItems:'center' }}>
              <MessageHeader />
              <NotificationHeader />
              <ProfileSection />
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
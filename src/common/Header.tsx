import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import authActions from '../redux/actions/auth';

const Header = () => {
  const authToken = localStorage.getItem('access-token');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch(authActions.signout(navigate));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            style={{ cursor: 'pointer' }}
            sx={{ flexGrow: 1 }}
            onClick={() => navigate('/home')}>
            Appartment Rental
          </Typography>
          {authToken ? (
            <Button color="inherit" onClick={signOut}>
              Signout
            </Button>
          ) : (
            <>
              <Button color="inherit" onClick={() => navigate('/signin')}>
                SignIn
              </Button>
              <Button color="inherit" onClick={() => navigate('/signup')}>
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

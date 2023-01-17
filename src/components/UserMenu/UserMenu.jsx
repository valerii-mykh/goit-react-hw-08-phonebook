import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Typography, Button } from '@mui/material';
import { Box } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '30px',
      }}
    >
      <Typography component="p" variant="h6" color="#12237D">
        Welcome, {user.email}
      </Typography>
      <Button
        type="button"
        width="50"
        variant="contained"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};

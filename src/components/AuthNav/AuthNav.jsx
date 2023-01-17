import { Link } from './AuthNav.styled';
import { Box } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '30px',
      }}
    >
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Box>
  );
};

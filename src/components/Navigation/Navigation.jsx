import { Link } from './Navigation.styled';
import { useAuth } from 'hooks';
import { Box } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '30px',
      }}
    >
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Box>
  );
};

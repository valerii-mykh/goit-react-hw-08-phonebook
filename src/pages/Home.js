import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Home() {
  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography component="h1" variant="h4" mt={20} color="#12237D">
        Welcome to the phonebook{' '}
      </Typography>
    </Container>
  );
}

export default Home;

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Header, NavWrapper } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <NavWrapper>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </NavWrapper>
    </Header>
  );
};

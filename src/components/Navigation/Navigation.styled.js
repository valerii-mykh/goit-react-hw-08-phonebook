import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #12237d;
  font-weight: 500;
  font-size: 24px;

  &.active {
    color: #0000ff;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #11115d;
  font-weight: 500;
  font-size: 24px;
  &.active {
    color: #1100ff;
  }
`;

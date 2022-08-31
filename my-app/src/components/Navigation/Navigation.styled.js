import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderLink = styled(NavLink)`
   text-decoration: none;
        font-weight: 500;
    font-size: 18px;

    color: #2a363b;
     :hover,
  :focus,
  :active {
     color: #2196f3;
  }
  &:not(:last-child) {
 margin-right: 25px;
}
`;

export const NavigationSection = styled.nav`
background-color:#ADD8E6;
padding: 20px 0px;
margin-bottom: 20px;
`;


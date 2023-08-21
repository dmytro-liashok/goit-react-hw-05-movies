import { NavLink } from 'react-router-dom';
import { BiSolidCameraMovie } from 'react-icons/bi';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  font-family: Kanit;
  font-size: 24px;
  color: #f5f6f8;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.24px;

  &.active {
    color: orange;
  }
  &:hover {
    color: orange;
    transition: 250ms linear;
  }
`;

export const StyledLinkLogo = styled(NavLink)`
  font-family: Kanit;
  font-size: 24px;
  color: #f5f6f8;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.24px;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    color: orange;
    transition: 250ms linear;
  }
`;

export const LogoName = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const BiSolidCameraMovieStyled = styled(BiSolidCameraMovie)`
  width: 50px;
  height: auto;
  margin: 0;
`;

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  @media screen and (min-width: 768px) {
    margin-right: 55px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 24px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const NavItem = styled.li``;

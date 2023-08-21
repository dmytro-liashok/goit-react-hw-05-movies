import {
  NavHeader,
  StyledLink,
  StyledLinkLogo,
  NavList,
  NavItem,
  BiSolidCameraMovieStyled,
  LogoName,
} from './Navigation.styled';

export default function Navigation() {
  return (
    <NavHeader>
      <div>
        <StyledLinkLogo to="/">
          <BiSolidCameraMovieStyled />
          <LogoName>MovieCenter</LogoName>
        </StyledLinkLogo>
      </div>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/movies">Movies</StyledLink>
        </NavItem>
      </NavList>
    </NavHeader>
  );
}

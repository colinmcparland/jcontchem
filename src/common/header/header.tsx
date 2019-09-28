import React, { FC } from "react";
import styled from "styled-components";
import Logo from "../../media/images/jcontchem_logo.png";
import { Link } from "react-router-dom";
import {
  h1FontSize,
  baskerville,
  h2FontSize,
  h6FontSize,
  montserrat
} from "../../css/snippets/fonts";
import { blue, white, darkBlue } from "../../css/snippets/colors";
/* 

    Start Styled Components

*/
export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
  padding: 25px 50px;
  ${baskerville}
  background-color: ${blue};
`;

export const HeaderLogo = styled.img`
  width: 250px;
  filter: invert(100%);
`;

export const MenuContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-end;
  grid-column-gap: 25px;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  ${montserrat}
  color: ${white};
  ${h6FontSize}
  text-decoration: none;
`;

export const PageTitle = styled.div`
  ${h2FontSize}
  ${baskerville}
  text-transform: capitalize;
`;

const CTA = styled.div`
  background-color: ${darkBlue};
  padding: 12px;
  border-radius: 3px;
  color: ${white};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
`;

interface HeaderProps {
  pageTitle: string;
}

export const Header: FC<HeaderProps> = props => (
  <HeaderContainer>
    <HeaderLogo src={Logo} />
    <MenuContainer>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <CTA>
        <StyledLink to="/submit">Contribute</StyledLink>
      </CTA>
    </MenuContainer>
    <PageTitle>{props.pageTitle}</PageTitle>
  </HeaderContainer>
);

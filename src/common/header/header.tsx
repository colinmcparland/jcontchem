import React, { FC } from "react";
import styled from "styled-components";
import Logo from "../../media/images/jcontchem_logo.png";
import { Link } from "react-router-dom";
/* 

    Start Styled Components

*/
export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

export const HeaderLogo = styled.img`
  width: 200px;
`;

export const MenuContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-end;
  grid-column-gap: 1em;
`;

export const Header: FC = props => (
  <HeaderContainer>
    <HeaderLogo src={Logo} />
    <MenuContainer>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </MenuContainer>
  </HeaderContainer>
);

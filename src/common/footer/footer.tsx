import React, { FC } from "react";
import { darkBlue, white } from "../../css/snippets/colors";
import styled from "styled-components";
import LogoPath from "../../media/images/jcontchem_logo.png";
import { montserrat } from "../../css/snippets/fonts";

const FooterContainer = styled.div`
  background-color: ${darkBlue};
  padding: 50px;
  display: grid;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    grid-row-gap: 25px;
  }

  @media screen and (min-width: 768px) {
    grid-row-gap: 0;
    grid-template-columns: repeat(2, auto);
    justify-items: unset;
    justify-content: space-between;
  }
`;

const FooterCol = styled.div`
  display: grid;
  grid-row-gap: 5px;

  > * {
    color: ${white};
    font-size: 11px;
    ${montserrat}
  }
`;

const Logo = styled.img`
  max-width: 150px;
  filter: invert(100%);
`;

export const Footer: FC = () => (
  <FooterContainer>
    <FooterCol>
      <Logo src={LogoPath} />
    </FooterCol>
    <FooterCol>
      <div>
        &copy; Journal of Contrarian Chemistry {new Date().getFullYear()}
        &nbsp;|&nbsp;All Rights Reserved
      </div>

      <div></div>
    </FooterCol>
  </FooterContainer>
);

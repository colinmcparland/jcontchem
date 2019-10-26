import React, { FC } from "react";
import styled from "styled-components";
import {
  h4FontSize,
  montserratLight,
  montserrat,
  h5FontSize,
  montserratBold,
  smallFontSize
} from "../../css/snippets/fonts";
import { blue } from "../../css/snippets/colors";
import { HomeForm } from "./home-form";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 50px;
`;

const RecentArticles = styled.div`
  border-right: 1px solid #efefef;
  padding-right: 50px;
`;

const About = styled.div``;

const Title = styled.div`
  ${h4FontSize}
  margin-bottom: 30px;
`;

const Paragraph = styled.div`
  ${montserratLight}
`;

const Article = styled.div`
  display: grid;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #efefef;
  grid-row-gap: 8px;
`;

const ArticleTitle = styled.div`
  ${h5FontSize}
  ${montserrat}
`;

const ArticleMeta = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  ${smallFontSize}
  ${montserrat}
`;

const ArticleMetaItem = styled.div`
  ${montserratBold}
  color: ${blue};
`;

export const Home: FC = () => (
  <HomeContainer>
    <RecentArticles>
      <Title>Recent Articles</Title>
      <Article>
        <ArticleTitle>
          Against Ring Walking In Catalyst Transfer Polymerization
        </ArticleTitle>
        <ArticleMeta>
          <div>Written by&nbsp;</div>
          <ArticleMetaItem>
            C7F8BF99D8658781C25A3F387591A44ECDA05D37
          </ArticleMetaItem>
          <div>&nbsp;on&nbsp;</div>
          <ArticleMetaItem>September 15, 2019</ArticleMetaItem>
        </ArticleMeta>
        <Paragraph>
          The widely-accepted theory that catalyst transfer polymerization (CTP)
          proceeds through an asso- ciative intermediate between M(0) catalysts
          and the π-system of a conjugated polymer in order to give chain-growth
          kinetics is flawed. Consensus on this theory has been established over
          a number of years, allowing weaker and weaker studies to be accepted
          as evidence of this phenomenon. In this paper I present an alternative
          theory: that ring-walking is likely not real, certainly not impor-
          tant, and has hindered the progress of CTP.
        </Paragraph>
      </Article>
    </RecentArticles>
    <About>
      <Title>About JContChem</Title>
      <Paragraph>
        The Journal of Contrarian Chemistry is focused on challenging
        established consensus across all fields of chemistry. In every field,
        papers are published that are widely recognized in an unspoken manner as
        being of poor quality and/or drawing incorrect conclusions. This creates
        a situation where there is both a public and a private knowledge of any
        given problem or system. We aim to bridge the gap between these two
        spheres, lowering barriers to entry and saving researchers time by
        providing them with information that is all signal and no noise.
      </Paragraph>
      <HomeForm />
    </About>
  </HomeContainer>
);

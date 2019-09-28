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

export const Home: FC<any> = props => (
  <HomeContainer>
    <RecentArticles>
      <Title>Recent Articles</Title>
      {new Array(3).fill(0).map(() => (
        <Article>
          <ArticleTitle>Sample Article</ArticleTitle>
          <ArticleMeta>
            <div>Written by&nbsp;</div>
            <ArticleMetaItem>Hugh Jass</ArticleMetaItem>
            <div>&nbsp;on&nbsp;</div>
            <ArticleMetaItem>January 1, 1970</ArticleMetaItem>
          </ArticleMeta>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            tortor augue, rutrum eget turpis quis, condimentum interdum mi.
            Integer ut augue et augue congue laoreet ac tempor orci. Nam iaculis
            porttitor odio a sodales. Praesent sed feugiat massa. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </Paragraph>
        </Article>
      ))}
    </RecentArticles>
    <About>
      <Title>About JContChem</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        tortor augue, rutrum eget turpis quis, condimentum interdum mi. Integer
        ut augue et augue congue laoreet ac tempor orci. Nam iaculis porttitor
        odio a sodales. Praesent sed feugiat massa. Interdum et malesuada fames
        ac ante ipsum primis in faucibus.
      </Paragraph>
      <HomeForm />
    </About>
  </HomeContainer>
);

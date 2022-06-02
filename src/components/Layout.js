import * as React from 'react';

import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

import Color from '../components/Color';

import PageNavigation from '../components/PageNavigation';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';

const GlobalReset = createGlobalStyle`
 html,
 body,
 header,
 main,
 menu,
 nav,
 footer,
 section,
 article,
 pre,
 div,
 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 p,
 ol,
 ul,
 li,
 a {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     border-style: none;
     font-style: normal;
     list-style: none;
     text-decoration: none;
     scroll-behavior: smooth;
 }
 `;

const PageContainer = styled.div`
  background-color: orange;
  color: white;

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.main`
  background-color: yellow;
  color: black;

  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  flex-grow: 1;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalReset />
      <Color />
      <PageContainer>
        <PageHeader />
        <PageNavigation />
        <MainContent>{children}</MainContent>
        <PageFooter />
      </PageContainer>
    </>
  );
};

export default Layout;

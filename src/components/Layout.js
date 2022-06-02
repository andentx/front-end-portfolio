import * as React from 'react';

import styled from 'styled-components';

import PageNavigation from '../components/PageNavigation';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';

const PageContainer = styled.div`
  background-color: darkred;
  color: white;
`;

const Layout = ({ children }) => {
  return (
    <>
      <PageContainer>
        <PageHeader />
        <PageNavigation />
        {children}
        <PageFooter />
      </PageContainer>
    </>
  );
};

export default Layout;

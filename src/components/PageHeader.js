import * as React from 'react';

import styled from 'styled-components';

import PageHeaderLogo from './PageHeaderLogo';
import PageNavigation from './PageNavigation';

const Header = styled.header`
  height: 4rem;
  width: 100%;
  max-width: 1200px;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PageHeader = () => {
  return (
    <Header>
      <PageHeaderLogo />
      <PageNavigation />
    </Header>
  );
};

export default PageHeader;

import * as React from 'react';

import styled from 'styled-components';

const Header = styled.header`
  background-color: yellow;
  color: black;

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
      <h2>Page Header</h2>
    </Header>
  );
};

export default PageHeader;

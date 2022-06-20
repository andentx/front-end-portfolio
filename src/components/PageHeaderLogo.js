import * as React from 'react';

import styled from 'styled-components';

const Logo = styled.div`
  background-color: green;

  height: 100%;
  aspect-ratio: 1/1;
`;

const PageHeaderLogo = () => {
  return (
    <>
      <Logo></Logo>
    </>
  );
};

export default PageHeaderLogo;

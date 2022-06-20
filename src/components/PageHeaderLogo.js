import * as React from 'react';

import styled from 'styled-components';

const LogoContainer = styled.div`
  background-color: green;

  height: 100%;

  display: flex;
`;

const LetterA = styled.div`
  height: 0;
  width: 0;

  border-left: 18.475px solid transparent;
  border-right: 18.475px solid transparent;
  border-bottom: 32px solid blue;

  margin-right: 8px;
`;

const LetterD = styled.div`
  height: 32px;
  width: 0;

  border-right: 32px solid blue;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
`;

const PageHeaderLogo = () => {
  return (
    <>
      <LogoContainer>
        <LetterA />
        <LetterD />
      </LogoContainer>
    </>
  );
};

export default PageHeaderLogo;

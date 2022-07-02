import * as React from 'react';

import { Link } from 'gatsby';

import styled from 'styled-components';

const LogoContainer = styled.div`
  height: 100%;

  display: flex;

  cursor: pointer;
  z-index: 1000;
`;

const LetterA = styled.div`
  height: 0;
  width: 0;

  border-left: 18.475px solid transparent;
  border-right: 18.475px solid transparent;
  border-bottom: 32px solid antiquewhite;

  margin-right: 8px;

  z-index: 1000;
`;

const LetterD = styled.div`
  height: 32px;
  width: 0;

  border-right: 32px solid antiquewhite;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;

  z-index: 1000;
`;

const PageHeaderLogo = () => {
  return (
    <>
      <Link to='/'>
        <LogoContainer>
          <LetterA />
          <LetterD />
        </LogoContainer>
      </Link>
    </>
  );
};

export default PageHeaderLogo;

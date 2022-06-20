import * as React from 'react';

import styled from 'styled-components';

const Footer = styled.footer`
  height: 4rem;
  width: 100%;
  max-width: 1200px;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PageFooter = () => {
  return (
    <Footer>
      <p>footer link</p>
      <p>footer link</p>
      <p>footer link</p>
    </Footer>
  );
};

export default PageFooter;

import * as React from 'react';

import styled from 'styled-components';

const DesktopNavigation = styled.nav`
  background-color: orange;

  height: 100%;

  display: flex;
  align-items: center;

  ul {
    background-color: yellow;

    height: 100%;

    display: flex;
    align-items: center;

    li {
      background-color: green;

      margin-left: 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      line-height: 0.6;
    }
  }
`;

const PageNavigation = () => {
  return (
    <>
      <DesktopNavigation>
        <ul>
          <li>nav</li>
          <li>nav</li>
          <li>nav</li>
        </ul>
      </DesktopNavigation>
    </>
  );
};

export default PageNavigation;

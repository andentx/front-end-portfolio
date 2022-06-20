import * as React from 'react';

import styled from 'styled-components';

const NavigationContainer = styled.div`
  background-color: green;

  height: 100%;

  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  background-color: blue;
  color: white;

  margin-left: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  line-height: 0.6;
`;

const PageNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <NavItem>
          <p>nav</p>
        </NavItem>
        <NavItem>
          <p>nav</p>
        </NavItem>
        <NavItem>
          <p>nav</p>
        </NavItem>
      </NavigationContainer>
    </>
  );
};

export default PageNavigation;

import * as React from 'react';

import styled from 'styled-components';

const NavigationContainer = styled.div`
  background-color: green;

  height: 100%;
  aspect-ratio: 16/9;
`;

const PageNavigation = () => {
  return (
    <>
      <NavigationContainer></NavigationContainer>
    </>
  );
};

export default PageNavigation;

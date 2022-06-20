import * as React from 'react';

import { createGlobalStyle } from 'styled-components';

const GlobalColor = createGlobalStyle`
 html,
 body {
     background-color: darkslategrey;
     color: antiquewhite;
 }
 `;

const Color = () => {
  return (
    <>
      <GlobalColor />
    </>
  );
};

export default Color;

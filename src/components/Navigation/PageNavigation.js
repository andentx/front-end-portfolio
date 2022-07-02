import * as React from 'react';

import { Link } from 'gatsby';

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

      a {
        color: antiquewhite;
      }
      a:hover {
        color: antiquewhite;
      }
      a:active {
        color: antiquewhite;
      }
    }
  }
`;

const PageNavigation = () => {
  return (
    <>
      <DesktopNavigation>
        <ul>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/page'>page</Link>
          </li>
          <li>
            <Link to='/#contact'>contact</Link>
          </li>
        </ul>
      </DesktopNavigation>
    </>
  );
};

export default PageNavigation;

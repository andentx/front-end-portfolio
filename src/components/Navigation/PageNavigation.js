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

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const PageNavigation = () => {
  const navLinks = [
    {
      id: 1,
      text: 'home',
      url: '/',
    },
    {
      id: 2,
      text: 'page',
      url: '/page',
    },
    {
      id: 3,
      text: 'contact',
      url: '#contact',
    },
  ];

  return (
    <>
      <DesktopNavigation>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.url} activeClassName='selected'>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </DesktopNavigation>
    </>
  );
};

export default PageNavigation;

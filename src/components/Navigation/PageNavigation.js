import * as React from 'react';
import { useState } from 'react';

import { Link } from 'gatsby';

import styled from 'styled-components';

import { openIcon, closeIcon } from './NavIcon.module.css';

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

const MobileNavigationMenuIcon = styled.button`
  background-color: orange;
  height: 100%;
  aspect-ratio: 1/1;
  border: none;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const PageNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

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

      <MobileNavigationMenuIcon onClick={toggleMenu}>
        <div className={`${isOpen ? closeIcon : openIcon}`}></div>
      </MobileNavigationMenuIcon>
    </>
  );
};

export default PageNavigation;

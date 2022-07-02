import * as React from 'react';
import { useState } from 'react';

import { Link } from 'gatsby';

import styled, { createGlobalStyle } from 'styled-components';

import { openIcon, closeIcon } from './NavIcon.module.css';

const Global = createGlobalStyle`
 @media screen and (max-width: 700px) {
     html,
     body {
         max-height: ${({ isOpen }) => (isOpen ? '100vh' : 'none')};
         overflow-y: ${({ isOpen }) => (isOpen ? 'hidden' : 'auto')};
     }
 }
 `;

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

  z-index: 100;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const MobileNavigation = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;

  display: flex;

  transition: transform 300ms;

  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const ClosePanel = styled.div`
  height: 100%;
  width: 30%;
`;

const LinkPanel = styled.div`
  background-color: darkblue;
  height: 100%;
  width: 70%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    background-color: purple;
  }
  li {
    background-color: pink;
    margin-bottom: 2rem;
  }
  a {
    font-size: 2rem;
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
      <Global isOpen={isOpen} />

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

      <MobileNavigation isOpen={isOpen}>
        <ClosePanel onClick={toggleMenu} />
        <LinkPanel>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.url} onClick={toggleMenu} activeClassName='selected'>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </LinkPanel>
      </MobileNavigation>
    </>
  );
};

export default PageNavigation;

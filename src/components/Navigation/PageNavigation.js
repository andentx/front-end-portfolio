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
  height: 100%;

  display: flex;
  align-items: center;

  ul {
    height: 100%;

    display: flex;
    align-items: center;

    li {
      margin-left: 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      line-height: 0.6;

      a {
        color: antiquewhite;
        transition: color 200ms;
      }
      a:hover {
        color: hsl(34, 78%, 81%);
      }
      a:active {
        color: hsl(34, 78%, 81%);
      }
      .selected {
        color: hsl(34, 78%, 81%);
      }
    }
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const MobileNavigationMenuIcon = styled.button`
  height: 100%;
  aspect-ratio: 1/1;
  border: none;

  background: transparent;
  cursor: pointer;

  z-index: 100;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const MobileNavigation = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
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
  background-color: hsla(180, 25%, 15%, 0.9);

  backdrop-filter: blur(1rem);

  height: 100%;
  width: 70%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
  }

  li {
    margin-bottom: 2rem;
  }

  a {
    font-size: 2rem;
    color: antiquewhite;
  }
  a:hover {
    color: hsl(34, 78%, 81%);
  }
  a:active {
    color: hsl(34, 78%, 81%);
  }

  .selected {
    color: hsl(34, 78%, 81%);
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
      url: '/#contact',
    },
  ];

  return (
    <>
      <Global isOpen={isOpen} />

      <DesktopNavigation isOpen={isOpen}>
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

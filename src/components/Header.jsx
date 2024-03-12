import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Title from './Title';
import { useTheme } from '../hooks/ThemeProvider';
import dayAndNightLight from '../assets/dayAndNight_light.png';
import dayAndNightDark from '../assets/dayAndNight_dark.png';
import NavbarMenu from './navbar';

const Header = styled.header`
  background-color: var(--text-box-color);

  .container {
    display: grid;
    grid-template-columns: 400px minmax(100px, auto) 150px;
    align-items: center;
    padding: 0 2rem;
    margin: 0 auto;
    max-width: 900px;
    h2 {
      font-size: 1.2rem;
      span {
        animation: blink-animation 1s steps(4, start) infinite;
        -webkit-animation: blink-animation 1.5s steps(5, start) infinite;
      }
      @keyframes blink-animation {
        to {
          visibility: hidden;
        }
      }
      @-webkit-keyframes blink-animation {
        to {
          visibility: hidden;
        }
      }
    }
  }
  /* button {
    all: unset;
  } */
`;

const HeaderMenu = () => {
  const { toggleTheme, theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <Header>
      <div className="container">
        <h2>
          <Title />
          <span>_</span>
        </h2>
        <NavbarMenu />
      </div>
    </Header>
  );
};

export default HeaderMenu;

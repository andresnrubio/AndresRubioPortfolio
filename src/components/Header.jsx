import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Title from './Title';
import { useTheme } from '../hooks/ThemeProvider';
import dayAndNightLight from '../assets/dayAndNight_light.png';
import dayAndNightDark from '../assets/dayAndNight_dark.png';
import NavbarMenu from './navbar';

const Header = styled.header`
  width: 100%;
  position: fixed;
  background-color: var(--text-box-color-33);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  .container {
    height: 50px;
    display: grid;
    grid-template-columns: minmax(180px, 250px) minmax(100px, auto) 150px;
    align-items: center;
    justify-items: start;
    padding: 0 2rem;
    margin: 0 auto;
    max-width: 900px;
    h1 {
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
    button {
      all: unset;
      place-self: center end;
      display: flex;
    }
    button :hover {
      opacity: 0.5;
    }
  }
`;

const HeaderMenu = () => {
  const { toggleTheme, theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <Header>
      <div className="container">
        <h1>
          <Title />
          <span>_</span>
        </h1>
        <NavbarMenu />
        <button onClick={toggleTheme}>
          {isDarkTheme ? (
            <img src={dayAndNightDark} alt="" />
          ) : (
            <img src={dayAndNightLight} alt="" />
          )}
        </button>
      </div>
    </Header>
  );
};

export default HeaderMenu;

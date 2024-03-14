import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../hooks/ThemeProvider';
import useDeviceType from '../hooks/useDeviceType';

import Title from './Title';
import dayAndNightLight from '../assets/dayAndNight_light.png';
import dayAndNightDark from '../assets/dayAndNight_dark.png';
import NavbarMenu from './navbar';
import HamburguerMenu from './HamburguerMenu';

const Header = styled.header`
  width: 100%;
  position: fixed;
  background-color: var(--text-box-color-33);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  .container {
    height: 50px;
    display: ${(props) => (props.mobile ? 'flex' : 'grid')};
    grid-template-columns: minmax(180px, 250px) minmax(100px, auto) 150px;
    align-items: center;
    justify-items: start;
    justify-content: ${(props) => (props.mobile ? 'space-between' : '')};
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

const MenuContainer = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  margin-top: 150px;
`;

const MenuItem = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
`;

const HeaderMenu = () => {
  const { toggleTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };
  const isDarkTheme = theme === 'dark';

  const deviceType = useDeviceType();

  console.log(deviceType === 'mobile');

  return (
    <Header mobile={deviceType === 'mobile'}>
      <div className="container">
        <h1>
          <Title />
          <span>_</span>
        </h1>
        {deviceType != 'mobile' ? (
          <>
            <NavbarMenu />
            <button onClick={toggleTheme}>
              {isDarkTheme ? (
                <img src={dayAndNightDark} alt="" />
              ) : (
                <img src={dayAndNightLight} alt="" />
              )}
            </button>
          </>
        ) : (
          <>
            <span />
            <HamburguerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
            <MenuContainer isOpen={isOpen}>
              <NavbarMenu mobile closeOnClick={handleItemClick} />
              <button
                onClick={() => {
                  toggleTheme();
                  handleItemClick();
                }}>
                {isDarkTheme ? (
                  <img src={dayAndNightDark} alt="" />
                ) : (
                  <img src={dayAndNightLight} alt="" />
                )}
              </button>
            </MenuContainer>
          </>
        )}
      </div>
    </Header>
  );
};

export default HeaderMenu;

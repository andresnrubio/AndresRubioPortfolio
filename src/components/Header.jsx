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
  z-index: 100;
  .container {
    height: 48px;
    display: ${(props) => (props.mobile ? 'flex' : 'grid')};
    grid-template-columns: minmax(180px, 250px) minmax(100px, auto) 300px;
    align-items: center;
    justify-items: start;
    justify-content: ${(props) => (props.mobile ? 'space-between' : '')};
    /* padding: 0 2rem; */
    padding-left: 2rem;
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
      place-self: ${(props) => (props.isOpen ? 'end' : 'center end')};
      margin-right: ${(props) => (props.isOpen ? '1rem' : '')};
      display: flex;
    }
    button :hover {
      opacity: 0.5;
    }
  }
`;

const MenuContainer = styled.div`
  background-color: ${(props) => (props.isOpen ? 'var(--background-color)' : 'none')};
  /* width: 150px; */
  /* display: ${(props) => (props.isOpen ? 'block' : 'none')}; */
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  position: relative;
  z-index: 2;
  align-self: flex-start;
  /* margin-top: 50px; */
  /* margin-left: 50%; */
`;

const MenuItem = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
`;

const SideBar = styled.div`
  width: 100vw;
  max-width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: var(--text-box-color-33);
  align-self: start;
  padding: 1rem;
  position: relative;
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

  return (
    <Header mobile={deviceType === 'mobile'} isOpen={isOpen}>
      <div className="container">
        <h1>
          {isOpen ? '' : <Title />}
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
            <MenuContainer isOpen={isOpen}>
              <HamburguerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
              {isOpen ? (
                <SideBar>
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
                </SideBar>
              ) : (
                <></>
              )}
            </MenuContainer>
          </>
        )}
      </div>
    </Header>
  );
};

export default HeaderMenu;

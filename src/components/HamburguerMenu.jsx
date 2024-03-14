import { useState } from 'react';
import styled, { css } from 'styled-components';

const HamburguerMenuIcon = styled.a`
  height: 48px;
  position: relative;
  -webkit-transition: -webkit-transform 0.4s;
  transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  transition:
    transform 0.4s,
    -webkit-transform 0.4s;
  width: 48px;
  justify-self: end;
  span {
    background-color: var(--text-color);
    display: block;
    height: 2px;
    left: 14px;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    width: 20px;
  }
  span:first-child {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  span:last-child {
    -webkit-transform: translateY(6px);
    transform: translateY(6px);
  }

  /* Menu Active */
  ${({ active }) =>
    active === 'true' &&
    css`
      span:first-child {
        -webkit-transform: rotate(45deg) translate(0);
        transform: rotate(45deg) translate(0);
      }
      span:nth-child(2) {
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
      }
      span:last-child {
        -webkit-transform: rotate(-45deg) translate(0);
        transform: rotate(-45deg) translate(0);
      }
    `}
`;

const HamburguerMenu = ({ toggleMenu, isOpen }) => {
  return (
    <HamburguerMenuIcon active={`${isOpen}`} onClick={toggleMenu ? toggleMenu : () => {}}>
      <span></span>
      <span></span>
      <span></span>
    </HamburguerMenuIcon>
  );
};

export default HamburguerMenu;

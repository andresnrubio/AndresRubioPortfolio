import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HamburguerMenu from './HamburguerMenu';
import { useEffect } from 'react';

const buttonDefault = 'none';

const Navbar = styled.nav`
  background-color: ${(props) => props.color || buttonDefault};
  ul {
    all: unset;
    display: flex;
    flex-direction: ${(props) => (props.$mobile ? 'column' : 'row')};
    gap: ${(props) => (props.$mobile ? '' : '2rem')};
    /* grid-template-columns: repeat(4); */
  }
  ul li {
    list-style: none;
    margin-top: 6px;
    width: max-content;
  }
  a {
    div {
      width: 0%;
      height: 3px;
      padding: 1px 0;
      background-color: var(--text-color);
    }
    &:hover {
      div {
        transition: width 0.8s;
        width: 100%;
      }
    }
    /* ${(props) =>
      props.active
        ? `div {
        width: 100%;
        height: 3px;
        background-color: var(--text-color);
      }`
        : ''} */
    ${({ active }) =>
      active === 'true' &&
      css`
        div {
          width: 100%;
          height: 3px;
          background-color: var(--text-color);
        }
      `}/* &:active {
      div {
        width: 100%;
        height: 3px;
        background-color: var(--text-color);
      }
    } */
  }
`;

const NavbarMenu = ({ mobile, closeOnClick }) => {
  return (
    <Navbar $principal $mobile={mobile}>
      <ul>
        {mobile ? (
          <li onClick={closeOnClick}>
            <Link to={'/'}>
              Inicio
              <div />
            </Link>
          </li>
        ) : (
          <></>
        )}
        <li onClick={closeOnClick}>
          <Link to={'/projects'}>
            Proyectos
            <div />
          </Link>
        </li>
        <li onClick={closeOnClick}>
          <Link to={'/about'}>
            Sobre mi
            <div />
          </Link>
        </li>
        <li onClick={closeOnClick}>
          <Link to={'/contact'}>
            Contacto
            <div />
          </Link>
        </li>
      </ul>
    </Navbar>
  );
};

export default NavbarMenu;

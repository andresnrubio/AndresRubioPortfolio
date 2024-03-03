import React from 'react';
import styled from 'styled-components';

const buttonDeafult = 'none';

const Navbar = styled.nav`
  background-color: ${(props) => props.color || buttonDeafult};
  ul {
    all: unset;
    display: flex;
    gap: 2rem;
    /* grid-template-columns: repeat(4); */
  }
  ul li {
    list-style: none;
  }
  a {
    width: fit-content;
    color: white;
    div {
      width: 0%;
      height: 3px;
      padding: 1px 0;
      background-color: white;
    }
    &:hover {
      div {
        transition: width 0.8s;
        width: 100%;
      }
    }
    &:active {
      div {
        width: 100%;
        height: 3px;
        background-color: white;
      }
    }
  }
`;

const NavbarMenu = () => {
  return (
    <Navbar $principal>
      <ul>
        <li>
          <a href="">
            Inicio
            <div />
          </a>
        </li>
        <li>
          <a href="">
            Mis proyectos
            <div />
          </a>
        </li>
        <li>
          <a href="">
            Sobre mi
            <div />
          </a>
        </li>
        <li>
          <a href="">
            Contacto
            <div />
          </a>
        </li>
      </ul>
    </Navbar>
  );
};

export default NavbarMenu;

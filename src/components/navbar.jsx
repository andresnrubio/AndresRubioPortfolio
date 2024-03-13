import styled from 'styled-components';
import { Link } from 'react-router-dom';

const buttonDefault = 'none';

const Navbar = styled.nav`
  background-color: ${(props) => props.color || buttonDefault};
  ul {
    all: unset;
    display: flex;
    gap: 2rem;
    /* grid-template-columns: repeat(4); */
  }
  ul li {
    list-style: none;
    margin-top: 6px;
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
    &:active {
      div {
        width: 100%;
        height: 3px;
        background-color: var(--text-color);
      }
    }
  }
`;

const NavbarMenu = () => {
  return (
    <Navbar $principal>
      <ul>
        <li>
          <Link to={'/projects'}>
            Proyectos
            <div />
          </Link>
        </li>
        <li>
          <Link to={'/about'}>
            Sobre mi
            <div />
          </Link>
        </li>
        <li>
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

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const buttonDefault = 'none';

const Navbar = styled.nav`
  background-color: ${(props) => props.color || buttonDefault};
  margin-bottom: ${(props) => (props.$mobile ? '1rem' : '')};
  width: ${(props) => (props.$mobile ? '100%' : 'max-content')};

  ul {
    all: unset;
    display: flex;
    flex-direction: ${(props) => (props.$mobile ? 'column' : 'row')};
    gap: ${(props) => (props.$mobile ? '1rem' : '2rem')};
    align-items: flex-end;
  }
  ul li {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    margin-top: 6px;
    width: ${(props) => (props.$mobile ? '90%' : 'max-content')};
    border-bottom: ${(props) => (props.$mobile ? '1px solid var(--text-color-underline)' : '')};
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
    ${({ active }) =>
      active === 'true' &&
      css`
        div {
          width: 100%;
          height: 3px;
          background-color: var(--text-color);
        }
      `}
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

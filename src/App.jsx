import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import router from './routes';
import styled from 'styled-components';
import NavbarMenu from './components/navbar';
import TypingAnimation from './utils/Animations';
import './App.css';

const MainContainer = styled.div`
  display: ${(props) => (props.scrolled ? 'grid' : 'block')};
  grid-template-columns: 100px 1fr;
  height: 100dvh;
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: max-content minmax(100px, auto);
  align-items: center;
  justify-items: end;
  padding: 0 2rem;

  h1 {
    font-weight: 200;

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
`;

const App = () => {
  const [count, setCount] = useState(0);

  const title = 'Andrés Rubio';

  return (
    <MainContainer>
      <Header>
        <h1>
          <TypingAnimation text={title} delay={100} />
          <span>_</span>
        </h1>
        <NavbarMenu />
      </Header>
      <RouterProvider router={router} />
    </MainContainer>
  );
};

export default App;

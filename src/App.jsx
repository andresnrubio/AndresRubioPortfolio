import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyles } from './theme';
import { ThemeProvider } from './hooks/ThemeProvider';
import './App.css';
import HeaderMenu from './components/Header';

const MainContainer = styled.div`
  display: ${(props) => (props.scrolled ? 'grid' : 'block')};
  grid-template-columns: 100px 1fr;
  height: 100dvh;
  padding-top: 100px;
  max-width: 520px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <ThemeProvider>
      <HeaderMenu />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;

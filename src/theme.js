import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background-color: ${({ theme }) => theme.body};
    --text-color: ${({ theme }) => theme.text};
    --text-shadow: ${({ theme }) => theme.text_shadow};
    --text-color-underline: ${({ theme }) => theme.text_underline};
    --text-color-important: ${({ theme }) => theme.text_box_important};
    --text-box-color: ${({ theme }) => theme.text_box_color};
    --text-box-color-33: ${({ theme }) => `${theme.text_box_color}33`};
    --button-primary:#6399CB;
    --button-secondary: #C45C55;
    --picture-filter:  ${({ theme }) => theme.picture_filter};
  }

  body {
    background: var(--background-color);
    color: var(--text-color);
    transition: background 0.2s , color 0.2s ease-in;
    font-size: 1rem;
  }

  button {
    background: ${({ secondary, primary }) => (secondary ? secondary : primary)};
  }
  
  a{
    text-decoration: none;
    color: var(--text-color);
  }

  img{
    transition: filter 0.5ms ease-in;
  }
`;

export const lightTheme = {
  body: '#f0e7db',
  text: '#0d0d0d',
  text_underline: '#0d0d0d30',
  text_shadow: '#0d0d0d30',
  text_box_important: '#6399CB',
  text_box_color: '#FFFFFF',
  picture_filter: 'grayscale(0.2)'
};
export const darkTheme = {
  body: '#202023',
  text: '#ffffffde',
  text_underline: '#ffffff30',
  text_shadow: '#ffffff30',
  text_box_important: '#6399CB',
  text_box_color: '#43434A',
  picture_filter: 'grayscale(0.5)'
};

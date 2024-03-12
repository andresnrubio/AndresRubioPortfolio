import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Define tus variables CSS aquí */
    --background-color: ${({ theme }) => theme.body};
    --text-color: ${({ theme }) => theme.text};
    --text-color-important: ${({ theme }) => theme.text_box_important};
    --text-box-color: ${({ theme }) => theme.text_box_color};
    --button-primary:#6399CB;
    --button-secondary: #C45C55;
    /* --primary-color: #007bff;
    --secondary-color: #6c757d;
     */
  }

  body {
    background: var(--background-color);
    color: var(--text-color);
    transition: background 0.2s, color 0.2s ease-in;
    font-size: 1rem;
  }

  button {
    background: ${({ secondary, primary }) => (secondary ? secondary : primary)};
  }
  
  a{
    text-decoration: none;
    color: var(--text-color);
  }
`;

export const lightTheme = {
  body: '#f0e7db',
  text: '#0d0d0d',
  text_box_important: '#6399CB',
  text_box_color: '#FAF0CA'
};
export const darkTheme = {
  body: '#202023',
  text: '#ffffffde',
  text_box_important: '#6399CB',
  text_box_color: '#43434A'
};

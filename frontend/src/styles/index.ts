import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Selima';
    font-style: normal;
    font-weight: normal;
    src: url('../assets/fonts/Selima.otf') format('otf');
  }

  html {
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: overlay;
    scroll-behavior: smooth;
    font-family: 'Be Vietnam Pro', 'Selima', Inter, Avenir, Helvetica, Arial, sans-serif, sans-serif;
    line-height: 1.5rem;
    ${({ theme }) => theme.utils.scrollbar};
  }

  #root {
    height: inherit;
  }

  *, *:before, *:after {
  box-sizing: inherit;
  }
  
  body {
    margin: 0;
    background-color: #000;
    font-family: 'Be Vietnam Pro', 'Selima', Inter, Avenir, Helvetica, Arial, sans-serif, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      font-size: .75rem;
      line-height: 1.125rem;
    }
  }
  section {
    padding: 0 5rem;
  }

  h1, h2, h3 {
    margin: 0;
  }

  h1 {
    font-size: 2rem;
    line-height: 3rem;
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      font-size: 1.25rem;
      line-height: 1.875rem;
    }
  }
  
  h2 {
    font-size: 1.75rem;
    line-height: 2.625rem;
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.875rem;
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
  

  a {
    transition: all 0.2s;
    &:hover {
      opacity: 0.6
    }
    &:visited {
      color: inherit;
    }
  }

  ul {
    list-style: none;
  }

  li {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;

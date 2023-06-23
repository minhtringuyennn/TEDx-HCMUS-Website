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
  }
  section {
    padding: 0 5rem;
  }

  h1, h2, h3 {
    margin: 0;
  }

  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.25rem;
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
  
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    h1 {
      font-size: 1.25rem
    }

    h2, h3 {
      font-size: 1rem
    }

    body {
      font-size: .75rem
    }
  }
  }
`;

export default GlobalStyle;

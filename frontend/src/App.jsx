import styled from "styled-components";

import MainPage from "./layouts/MainPage";
import NavBar from "./components/NavBar";

import { TEDxHCMUSLogo } from "./assets";

function App() {
  const navbarLinks = [
    { url: "https://www.facebook.com/tedxhcmus/", title: "Our Fanpage" },
    { url: "https://short.tedxhcmus.com/signup2022/", title: "Jobs Openning" },
    { url: "https://chat.tedxhcmus.com/", title: "Contact Us" },
  ];

  return (
    <Styled>
      <NavBar navbarLinks={navbarLinks} imageSrc={TEDxHCMUSLogo} />
      <MainPage />
    </Styled>
  );
}

const Styled = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Be Vietnam Pro", sans-serif;
`;

export default App;

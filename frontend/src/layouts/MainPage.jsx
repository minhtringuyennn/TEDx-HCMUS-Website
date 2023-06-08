import React from "react";
import styled from "styled-components";

import Countdown from "../components/Countdown";
import HeroSwiper from "../components/HeroSwiper";

const MainPage = () => {
  return (
    <Styled>
      <Countdown date={`2022-10-06T20:00:00+07:00`} className="countdown" />
      <div className="title">
        TEDx HCMUS Jobs Opening
        <div className="subtitle">
          Starting from {<span className="hightlight">now</span>} to
          {<span className="hightlight"> 20h00, 06 Oct</span>}.
        </div>
      </div>
      <HeroSwiper />
    </Styled>
  );
};

const Styled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  .countdown {
    position: absolute;
    z-index: 5000;
  }

  .title {
    color: white;
    margin: 10px 0px;
    padding: 15px;
    position: absolute;
    bottom: 5%;
    right: 5%;
    z-index: 1;

    font-size: 50px;
    font-weight: 700;
    text-align: right;
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);

    .subtitle {
      margin-top: 10px;
      font-size: 20px;
    }
  }

  .hightlight {
    color: #ff2b06;
  }

  @media screen and (max-width: 768px) {
    .title {
      font-size: 36px;
    }
    .subtitle {
      font-size: 16px;
    }
  }
`;

export default MainPage;

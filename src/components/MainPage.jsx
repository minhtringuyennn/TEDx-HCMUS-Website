import React from "react";
import styled from "styled-components";

import Countdown from "./Countdown";

const MainPage = ({ imageSrc }) => {
  return (
    <Styled>
      <img src={imageSrc} alt="TEDx HCMUS" className="image" />
      <Countdown date={`2022-10-06T20:00:00+07:00`} />
      <h1 className="title">
        TEDx HCMUS Jobs Openning{" "}
        <h2 className="subtitle">
          Starting from {<span className="hightlight">now</span>} to
          {<span className="hightlight"> 20h00, 06 Oct</span>}.
        </h2>
      </h1>
    </Styled>
  );
};

const Styled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  .image {
    width: 100%;
    height: 100%;
    align-items: center;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 20%,
      transparent 100%
    );
    object-fit: cover;
    position: absolute;
  }

  .title {
    color: white;
    margin: 10px 0px;
    position: absolute;
    padding: 15px;
    bottom: 0%;
    right: 5%;
    font-size: 60px;
    text-align: right;
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }

  .subtitle {
    color: white;
    margin: 10px 0px;
    font-size: 20px;
    text-align: right;
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
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

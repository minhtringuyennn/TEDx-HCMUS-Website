import * as React from 'react';
import styled from 'styled-components';
import Navbar from 'components/NavBar/NavBar';
import HeroBanner from 'assets';
import Countdown from 'components/Countdown/Countdown';
import CTAButton from 'components/CTAButton/CTAButton';
import About from './Components/AboutSection';

const Home = () => {
  const date = '2023-08-03T23:49:00+07:00';
  return (
    <Styled>
      <Navbar />
      <section className="grid-container">
        <div className="grid-item-a">
          <img
            className="hero-img"
            src={HeroBanner}
            alt="Hero banner inSanity"
          />
        </div>
        <div className="container grid-item-b">
          <div className="content">
            <h3>Hạn mua vé inSanity</h3>
            <Countdown date={date} />
          </div>
          <CTAButton />
        </div>
      </section>
      <About />
    </Styled>
  );
};

const Styled = styled.div`
  section {
    height: 100vh;
    padding: 80px 80px 0 80px;
  }
  .hero-img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
  .container {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  .grid-container {
    display: grid;
    grid-template-rows: 70% 30%;
    width: 100%;
  }
  .grid-item-a {
    grid-row: 1 / 2;
    justify-items: center;
    place-self: end center;
    height: 100%;
  }
  .grid-item-b {
    grid-row: 2 / 3;
    place-self: start center;
  }

  @media screen and (max-width: ${({ theme }) => theme.size.sm}) {
    section {
      padding: 3rem 1rem;
      padding-bottom: 0;
      height: auto;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.size.sm}) {
    .grid-container {
      grid-template-rows: min-content auto;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.size.sm}) {
    .container {
      gap: 0.5rem;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.size.sm}) {
    .grid-item-a {
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.size.sm}) {
    .hero-img {
      width: 90%;
      height: auto;
    }
  }
`;
export default Home;

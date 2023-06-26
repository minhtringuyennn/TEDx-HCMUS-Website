import * as React from 'react';
import styled from 'styled-components';
import Navbar from 'components/NavBar/NavBar';
import HeroBanner from 'assets';
import Countdown from 'components/Countdown/Countdown';
import CTAButton from 'components/CTAButton/CTAButton';

const Home = () => (
  <Styled>
    <Navbar />
    <section className="grid-container">
      <div className="grid-item-a">
        <img className="hero-img" src={HeroBanner} alt="Hero banner inSanity" />
      </div>
      <div className="container grid-item-b">
        <div className="content">
          <h3>Early bird ticket opens </h3>
          <Countdown date="2023-07-01T00:00:00+07:00" />
        </div>
        <CTAButton />
      </div>
    </section>
  </Styled>
);

const Styled = styled.div`
  section {
    height: 100vh;
    padding: 5rem;
  }
  .hero-img {
    object-fit: contain;
    height: 100%;
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

  @media (max-width: ${({ theme }) => theme.size.sm}) {
    section {
      padding: 3rem 1rem;
    }
    .container {
      gap: 0.5rem;
    }
    .grid-container {
      grid-template-rows: min-content auto;
    }
    .grid-item-a {
      width: 100%;
      height: auto;
    }
    .hero-img {
      width: 100%;
      height: auto;
    }
  }
`;
export default Home;

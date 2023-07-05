import styled from 'styled-components';
import X from '../Assets';
import Sponsor from './Sponsor';

const Title = styled.div`
  ${({ theme }) => theme.bigTitle}
`;
const About = () => (
  <Styled>
    <section>
      <div className="about-container">
        <div className="about-left-col">
          <Title>About</Title>
          <div>
            <p>
              <span>TEDx HCMUS</span> is a pioneer connecting with TED to
              organize activities at the University of Science, and is
              officially licensed by TED. In the first years, TEDx HCMUS may
              have diversified and organization board members from different
              fields.{' '}
            </p>
            <p>
              With the message <span>The Generation Transformation</span> (the
              transformation of the generation), <span>TEDx HCMUS</span> was
              officially established on April 24th 2021 to be allowed to drive
              unique events according to the shape of the memory prescribed by
              TED to spread the good value –{' '}
              <span>“ideas worth spreading”</span> to the student community in
              University of Science, Vietnam National University – HCM in
              particular and in Ho Chi Minh City in general.{' '}
            </p>
            <p>
              <span>TEDx HCMUS</span> was born with a mission to build a space
              for students to exchange academics, connect communities, share
              their thoughts through talk shows - a picture of speeches.
            </p>
          </div>
          <div className="quote hidden-downlg">ideas worth spreading</div>
        </div>
        <div className="about-right-col">
          <img src={X} alt="X" />
          <div className="quote hidden-uplg">ideas worth spreading</div>
        </div>
      </div>
      <Sponsor />
    </section>
  </Styled>
);

const Styled = styled.div`
  section {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    }
  }
  p {
    margin-top: 0;
    text-align: left;
  }
  span {
    font-weight: bold;
  }
  .about-container {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas: 'text text text text text text text img img img img img';
    justify-items: start;
    @media screen and (max-width: ${({ theme }) => theme.size.sm}) {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
  .about-left-col {
    grid-area: text;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .about-right-col {
    grid-area: img;
    align-self: center;
  }
  .about-right-col img {
    width: 100%;
    @media screen and (max-width: ${({ theme }) => theme.size.sm}) {
      width: 80%;
    }
  }
  .quote {
    font-size: 3rem;
    font-family: 'Selima';
    line-height: normal;
    @media screen and (max-width: ${({ theme }) => theme.size.sm}) {
      font-size: 2rem;
    }
  }
  .hidden-downlg {
    @media screen and (max-width: ${({ theme }) => theme.size.lg}) {
      display: none;
    }
  }
  .hidden-uplg {
    @media screen and (min-width: ${({ theme }) => theme.size.lg}) {
      display: none;
    }
  }
`;
export default About;

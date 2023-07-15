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
              <span>TEDx HCMUS</span> là tổ chức tiên phong trong kết nối với
              TED để tổ chức các hoạt động tại Trường Đại học Khoa học Tự nhiên,
              và được cấp phép chính thức bởi TED. Trong những năm đầu tiên,
              TEDx HCMUS may mắn có được sự đa dạng văn hoá bởi các thành viên
              BTC đến từ các trường khác nhau{' '}
            </p>
            <p>
              Với thông điệp <span>The Generation Transformation</span> (sự
              chuyển biến của thế hệ), <span>TEDx HCMUS</span> đã được chính
              thức thành lập vào ngày 24 tháng 04 năm 2021 được phép tổ chức các
              sự kiện độc lập theo hình thức được quy định bởi TED nhằm lan tỏa
              những giá trị tốt đẹp– <span>“ideas worth spreading”</span> đến
              cộng đồng sinh viên tại Trường đại học Khoa học Tự nhiên, ĐHQG-HCM
              nói riêng và trên địa bàn thành phố Hồ Chí Minh nói chung{' '}
            </p>
            <p>
              <span>TEDx HCMUS</span> ra đời với sứ mệnh xây dựng cho sinh viên
              một không gian trao đổi học thuật, kết nối cộng đồng, chia sẻ…
              được truyền tải thông qua các talk show - một hình thức diễn
              thuyết
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
    @media screen and (max-width: ${({ theme }) => theme.size.sm}) {
      gap: 2rem;
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

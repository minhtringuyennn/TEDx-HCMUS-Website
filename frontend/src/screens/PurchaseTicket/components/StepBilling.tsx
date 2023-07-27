import { useStepper } from 'hooks';
import Button from 'components/Button';
import styled from 'styled-components';
import ClipboardCopy from 'components/ClipboardCopy/ClipboardCopy';
import BankData from './bankData.json';

function numberWithCommas(x: number) {
  let s = x.toString();
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(s)) s = s.replace(pattern, '$1.$2');
  return s;
}

interface BankInfo {
  title: string;
  value: string | number;
  copy: string | null;
}
const BankContainer = ({ title, value, copy }: BankInfo) => (
  <div className="bank-container">
    <div className="bank-description">
      <div className="bank-title">{title}</div>
      <div>{value}</div>
    </div>
    {copy ? <ClipboardCopy copyText={copy} /> : null}
  </div>
);

const StepBilling = () => {
  const { increment, decrement, seats } = useStepper();
  async function downloadImage(imageSrc: string) {
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'image file name here';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <StepBody>
      <div className="grid-left">
        <h3>Thông tin chuyển khoản</h3>
        {Object.entries(BankData).map(([key, value]) => (
          <BankContainer
            title={key}
            value={value.value}
            copy={value.copy ? value.value : null}
          />
        ))}
        <BankContainer
          title="Số tiền"
          value={`${numberWithCommas(seats.payment.actualPrice)}đ`}
          copy={`${seats.payment.actualPrice}`}
        />
        <BankContainer
          title="Nội dung chuyển khoản"
          value="TXUS1234567"
          copy="TXUS1234567"
        />
        <p className="bank-notice">
          Lưu ý: Vui lòng <span>không chỉnh sửa</span> nội dung chuyển khoản để
          hệ thống có thể kiểm tra tự động và <span>lưu lại</span> kết quả giao
          dịch cho đến khi được xác nhận thanh toán.
        </p>
        <ButtonGroup>
          <Button typeFill="text" onClick={decrement}>
            Trở về
          </Button>
          <Button onClick={increment}>Xác nhận</Button>
        </ButtonGroup>
      </div>
      <div className="grid-right">
        <h3>Quét mã để thanh toán</h3>
        <Button>Tải ảnh</Button>
      </div>
    </StepBody>
  );
};

export default StepBilling;

const StepBody = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  text-align: center;
  margin-bottom: 2rem;
  .grid-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    grid-column: 2/6;
  }
  .grid-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    grid-column: 8/13;
  }
  .bank-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
  }
  .bank-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .bank-title {
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.lightGray};
    @media: (max-width: ${({ theme }) => theme.size.sm}) {
      font-size: 10px;
      line-height: 15px;
    }
  }
  .bank-notice {
    font-style: italic;
    text-align: justify;
    span {
      color: ${({ theme }) => theme.colors.primary.default};
    }
  }
  @media (max-width: ${({ theme }) => theme.size.md}) {
    .grid-left {
      grid-column: 1/7;
    }
    .grid-right {
      grid-column: 8/12;
    }
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    display: flex;
    flex-direction: column-reverse;
    gap: 40px;
    .grid-left {
      gap: 8px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
`;

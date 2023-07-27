import styled from 'styled-components';
import sponsorData from './sponsorData';

interface SponsorProps {
  name: string;
  list: Array<any>;
  size: number;
}
const SponsorVendor = ({ name, list, size }: SponsorProps) => (
  <Vendor>
    <div>{name}</div>
    <div className="sponsor-list">
      {list.map((item) => (
        <img
          key={item.name}
          style={{ height: `${size * 100}%` }}
          src={item.src}
          alt={item.name}
        />
      ))}
    </div>
  </Vendor>
);

const Vendor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: space-evenly;
  .sponsor-list {
    height: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    @media screen and (max-width: ${({ theme }) => theme.size.sm}) {
      height: 32px;
    }
  }
`;

const Sponsor = () => (
  <Styled>
    {sponsorData.map((item) => (
      <SponsorVendor
        key={item.type}
        name={item.type}
        list={item.list}
        size={item.size}
      />
    ))}
  </Styled>
);

const Styled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px 48px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 32px;
  @media screen and (max-width: ${({ theme }) => theme.size.lg}) {
    gap: 16px 32px;
  }
  @media screen and (max-width: ${({ theme }) => theme.size.sm}) {
    gap: 16px;
  }
`;
export default Sponsor;

import styled from 'styled-components';
import SeatData from './seatData.json';

function generateMap(
  row: number,
  column: number,
  reserved: Array<Array<number>>,
) {
  const map = new Array(row).fill('').map(() => new Array(column).fill(''));
  reserved.forEach((seat) => {
    map[seat[0]][seat[1]] = 'X';
  });
  return map;
}

const CinemaSeats = () => {
  const numColumn = 16;
  return (
    <Styled>
      <div className="cinema">
        <div className="stage">Sân khấu</div>
        {Object.entries(SeatData).map(([key, value]) => {
          const map = generateMap(value.row, numColumn, value.reserved);
          return (
            <div className="zone">
              {map.map((row) => (
                <div className="row">
                  {row.map((seat) => {
                    if (seat === 'X') return <Seat className="reserved" />;
                    return <Seat />;
                  })}
                </div>
              ))}
              <div className="map-text">{key.slice(-1)}</div>
            </div>
          );
        })}
        <div style={{ display: 'flex' }}>
          <div className="map-notice">
            <Seat style={{ background: 'rgba(255, 43, 6, 0.3)' }} />
            <div>Ghế trống</div>
          </div>
          <div className="map-notice">
            <Seat style={{ background: '#b07979' }} />
            <div>Đã đặt</div>
          </div>
        </div>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  .stage {
    border: 1px solid #8a8a8a;
    width: 100%;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 4px;
  }
  .cinema {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .row {
      display: flex;
      flex-direction: row;
      gap: 4px;
      @media (max-width: ${({ theme }) => theme.size.sm}) {
        gap: 1px;
      }
    }
    .zone {
      display: flex;
      flex-direction: column;
      gap: 4px;
      over-flow: hidden;
      align-items: center;
      justify-content: center;
      background: rgba(255, 43, 6, 0.3);
      &:hover {
        background: rgba(163, 24, 0, 0.8);
        .map-text {
          opacity: 1;
        }
      }
      @media (max-width: ${({ theme }) => theme.size.sm}) {
        gap: 1px;
      }
      .map-text {
        opacity: 0;
        position: absolute;
        height: auto;
        width: auto;
        font-weight: bold;
        font-size: 3rem;
      }
    }
  }
  .map-notice {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
  }
  .reserved {
    background: #8f5252;
    border: none;
    color: #650f00;
    font-size: 12px;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    align-items: center;
  }
`;
const Seat = styled.div`
  display: block;
  height: 20px;
  width: 20px;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid #8f5252;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    height: 16px;
    width: 16px;
  }
`;
export default CinemaSeats;

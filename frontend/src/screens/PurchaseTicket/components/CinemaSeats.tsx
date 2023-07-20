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
  const numColumn = 15;
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
              <div className="map-text">{key}</div>
            </div>
          );
        })}
        <div style={{ display: 'flex' }}>
          <div className="map-notice" style={{ alignItems: 'center' }}>
            <Seat
              style={{
                background: 'rgba(255, 43, 6, 0.3)',
                alignItems: 'center',
              }}
            />
            <div>Ghế trống</div>
          </div>
          <div className="map-notice" style={{ alignItems: 'center' }}>
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
      gap: 0.75rem;
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
      padding: 1rem;
      border-radius: 4px;
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
    justify-content: center;
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
  height: 1rem;
  width: 1rem;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid #8f5252;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    height: 0.75rem;
    width: 0.75rem;
  }
`;
export default CinemaSeats;

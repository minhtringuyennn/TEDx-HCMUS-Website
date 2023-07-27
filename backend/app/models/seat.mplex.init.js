const { SEAT_STATUS, SEAT_TYPE } = require("../common/constants");

const ROW = 12;
const COL = 27;

const ROW_NAME = ["E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R"];

const SHORT_ROW_NAME = ["L", "M", "N", "P", "Q", "R"];

const ECO_ROW_NAME = ["R", "Q"];
const PREMIUM_ROW_NAME = ["E", "F", "G", "H", "J", "K"];

function initSeat() {
  const seat = [];
  for (let i = 0; i < ROW; i++) {
    const currentRow = ROW_NAME[i];
    const currentCol = SHORT_ROW_NAME.includes(currentRow) ? COL - 5 : COL;
    seat[i] = [];

    for (let j = 0; j < currentCol; j++) {
      seat[i][j] = {
        seatId: `${currentRow}${j + 1}`,
        seatType: SEAT_TYPE.STANDARD.key,
        seatPrice: SEAT_TYPE.STANDARD.price,
        seatStatus: SEAT_STATUS.AVAILABLE,
      };

      if (ECO_ROW_NAME.includes(currentRow)) {
        seat[i][j].seatType = SEAT_TYPE.ECO.key;
        seat[i][j].seatPrice = SEAT_TYPE.ECO.price;
      }

      if (PREMIUM_ROW_NAME.includes(currentRow) && j < COL - 5) {
        seat[i][j].seatType = SEAT_TYPE.PREMIUM.key;
        seat[i][j].seatPrice = SEAT_TYPE.PREMIUM.price;
      }
    }
  }
  return seat;
}

const INIT_SEAT = initSeat();

module.exports = {
  INIT_SEAT,
};

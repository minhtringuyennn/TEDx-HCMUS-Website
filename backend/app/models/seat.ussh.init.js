const ROW = 15;
const COL = 18;

function initSeat() {
  const seat = [];
  for (let i = 0; i < ROW; i++) {
    seat[i] = [];
    let currentSeat = 11 + i * COL;
    for (let j = 0; j < COL / 2; j++) {
      seat[i][j] = currentSeat;
      seat[i][COL / 2 + j] = currentSeat + 1;
      currentSeat += 2;
    }
  }
  return seat;
}

const INIT_SEAT = initSeat();

module.exports = {
  INIT_SEAT,
};

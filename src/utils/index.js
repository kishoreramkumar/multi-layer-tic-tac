export const noop = () => {};
export const cubeInitialData = [
  [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
];

export const winPossOfTable = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkTableData = (_cubeData, cellData, tableIndex) => {
  return winPossOfTable.some((possiblity) => {
    if (
      _cubeData[tableIndex][parseInt(possiblity[0] / 3)][possiblity[0] % 3] ===
        cellData &&
      _cubeData[tableIndex][parseInt(possiblity[1] / 3)][possiblity[1] % 3] ===
        cellData &&
      _cubeData[tableIndex][parseInt(possiblity[2] / 3)][possiblity[2] % 3] ===
        cellData
    ) {
      return true;
    }
    return false;
  });
};

export const checkCubeDiagnolData = (_cubeData, cellData) => {
  const isWinner = winPossOfTable.some((possiblity) => {
    if (
      (_cubeData[0][parseInt(possiblity[0] / 3)][possiblity[0] % 3] ===
        cellData &&
        _cubeData[1][parseInt(possiblity[1] / 3)][possiblity[1] % 3] ===
          cellData &&
        _cubeData[2][parseInt(possiblity[2] / 3)][possiblity[2] % 3] ===
          cellData) ||
      (_cubeData[2][parseInt(possiblity[0] / 3)][possiblity[0] % 3] ===
        cellData &&
        _cubeData[1][parseInt(possiblity[1] / 3)][possiblity[1] % 3] ===
          cellData &&
        _cubeData[0][parseInt(possiblity[2] / 3)][possiblity[2] % 3] ===
          cellData)
    ) {
      return true;
    }
    return false;
  });
  return isWinner;
};

export const checkCubeStraightRowData = (_cubeData, cellData) => {
  const isWinner = [0, 1, 2, 3, 4, 5, 6, 7, 8].some((possiblity) => {
    if (
      _cubeData[0][parseInt(possiblity / 3)][possiblity % 3] === cellData &&
      _cubeData[1][parseInt(possiblity / 3)][possiblity % 3] === cellData &&
      _cubeData[2][parseInt(possiblity / 3)][possiblity % 3] === cellData
    ) {
      return true;
    }
    return false;
  });
  return isWinner;
};

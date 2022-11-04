import { useCallback, useState } from "react";
import Layer from "../../components/Layer";
import {
  cubeInitialData,
  checkTableData,
  checkCubeDiagnolData,
  checkCubeStraightRowData,
} from "../../utils";
import { TableWrapper, Container } from "./style";

function TableContainer() {
  const [cubeData, setCubeData] = useState(cubeInitialData);
  const [currentUser, setCurrentUser] = useState("X");
  const [winner, setWinner] = useState("");

  const checkIsWinner = useCallback(
    (_cubeData, cellData, cellIndex, rowIndex, tableIndex, count = 0) => {
      // Check single table validation
      if (checkTableData(_cubeData, cellData, tableIndex)) return true;
      else {
        //check multi table diagonal validation
        if (checkCubeDiagnolData(_cubeData, cellData)) {
          return true;
          //check multip table same index validation
        } else if (checkCubeStraightRowData(_cubeData, cellData)) {
          return true;
        }
      }
    },
    []
  );

  const onCellClick = useCallback(
    (cellData, cellIndex, rowIndex, tableIndex) => {
      let _cubeData = [...cubeData];
      let _tableData = [..._cubeData[tableIndex]];
      let _rowData = [..._tableData[rowIndex]];
      _rowData[cellIndex] = currentUser;
      _tableData[rowIndex] = _rowData;
      _cubeData[tableIndex] = _tableData;

      setCubeData(_cubeData);

      const isWinner = checkIsWinner(
        _cubeData,
        currentUser,
        cellIndex,
        rowIndex,
        tableIndex
      );
      if (isWinner) setWinner(currentUser);

      setCurrentUser((prevUser) => (prevUser === "X" ? "O" : "X"));
      // let _valueHash = { ...valueHash };
      // if (!_valueHash[rowIndex]) {
      //   _valueHash[rowIndex] = [cellIndex];
      // } else {
      //   _valueHash[rowIndex].push(cellIndex);
      // }
      // setValueHash(_valueHash);
    },
    [checkIsWinner, cubeData, currentUser]
  );

  /*
    [[[],[],[]], []]

  */

  return (
    <TableWrapper>
      {winner && <h1>{winner} is Winner</h1>}
      <Container>
        {cubeData.map((layerData, tableIndex) => {
          return (
            <Layer
              key={tableIndex}
              data={layerData}
              onCellClick={(...args) => onCellClick(...args, tableIndex)}
              // valueHash={valueHash}
              isDisabled={winner}
            />
          );
        })}
      </Container>
    </TableWrapper>
  );
}

export default TableContainer;

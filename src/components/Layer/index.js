import Cell from "../Cell";
import { LayoutWrapper, RowWrapper } from "./style";

function Layer({ data, onCellClick, isDisabled }) {
  return (
    <LayoutWrapper>
      {data.map((row, rowIndex) => {
        return (
          <RowWrapper key={rowIndex}>
            {row.map((data, cellIndex) => {
              return (
                <Cell
                  key={cellIndex}
                  value={data}
                  isDisabled={data || isDisabled}
                  onClick={() => onCellClick(data, cellIndex, rowIndex)}
                />
              );
            })}
          </RowWrapper>
        );
      })}
    </LayoutWrapper>
  );
}

export default Layer;

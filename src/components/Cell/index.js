import { noop } from "../../utils";
import { CellWrapper } from "./style";

function Cell({ value, onClick, isDisabled = false }) {
  return (
    <CellWrapper isDisabled={isDisabled} onClick={isDisabled ? noop : onClick}>
      {value}
    </CellWrapper>
  );
}

export default Cell;

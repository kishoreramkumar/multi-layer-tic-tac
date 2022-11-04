import { isDisabled } from "@testing-library/user-event/dist/utils";
import styled from "styled-components";

const CellWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border: 1px solid lightgrey;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ isDisabled }) => (isDisabled ? "grey" : "")};
`;

export { CellWrapper };

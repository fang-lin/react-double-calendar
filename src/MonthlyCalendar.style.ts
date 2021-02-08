import styled from 'styled-components';

export interface CellRect {
    cellWidth: number;
    cellHeight: number;
}

export const MonthlyCalendarWrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
`;

export const MonthlyCalendarTitle = styled.div<{ cellWidth: number }>`
  display: flex;
  height: 30px;
  line-height: 30px;

  span {
    text-align: center;
    width: ${({cellWidth}) => cellWidth}px;
    font-size: 12px;
  }
`;

export const MonthlyCalendarHeader = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  line-height: 30px;

  span {
    text-align: center;
    margin: 0 5px;
  }
`;

export const MonthlyCalendarCells = styled.div<CellRect>`
  width: ${({cellWidth}) => cellWidth * 7}px;
  display: flex;
  flex-wrap: wrap;

  div:nth-child(7n) {
    div {
      border-radius: 0 ${({cellHeight}) => cellHeight / 2}px ${({cellHeight}) => cellHeight / 2}px 0;
    }
  }

  div:nth-child(7n-13) {
    div {
      border-radius: ${({cellHeight}) => cellHeight / 2}px 0 0 ${({cellHeight}) => cellHeight / 2}px;
    }
  }
`;

export const BasicCell = styled.div<CellRect>`
  width: ${({cellWidth}) => cellWidth}px;
  margin: 2px 0;
  text-align: center;
  line-height: ${({cellHeight}) => cellHeight}px;
`;

export const UnselectableCell = styled(BasicCell)`
  color: #999;
`;

export const StartCell = styled(BasicCell)`
  background: pink;
  border-radius: ${({cellHeight}) => cellHeight / 2}px 0 0 ${({cellHeight}) => cellHeight / 2}px;

  div {
    border-radius: ${({cellHeight}) => cellHeight / 2}px !important;
    background: red;
  }
`;

export const EndCell = styled(BasicCell)`
  background: pink;
  border-radius: 0 ${({cellHeight}) => cellHeight / 2}px ${({cellHeight}) => cellHeight / 2}px 0;

  div {
    border-radius: ${({cellHeight}) => cellHeight / 2}px !important;
    background: red;
  }
`;

export const SelectedCell = styled(BasicCell)`
  div {
    background: pink;
  }
`;

export const SelectableCell = styled(BasicCell)`
  cursor: pointer;

  &:hover {
    background: #eee;
  }
`;
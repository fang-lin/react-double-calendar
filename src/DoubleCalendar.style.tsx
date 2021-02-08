import styled from "styled-components";

export const DoubleCalendarWrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 488px;
  box-shadow: 0 3px 5px 3px rgba(0, 0, 0, .3);
`;

export const DoubleCalendars = styled.div`
  display: flex;
  width: 488px;
`;

export const DoubleCalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    padding: 5px;
    cursor: pointer;
  }
`;
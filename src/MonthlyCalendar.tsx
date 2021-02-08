import React, {FunctionComponent} from "react";
import {
    UnselectableCell,
    MonthlyCalendarCells,
    StartCell,
    EndCell,
    SelectedCell,
    SelectableCell,
    MonthlyCalendarHeader,
    MonthlyCalendarWrapper,
    MonthlyCalendarTitle
} from "./MonthlyCalendar.style";

interface MonthlyCalendarProps {
    startDate?: Date;
    endDate?: Date;
    monthDate: Date;
    selectDate: any;
    startFromMonday: boolean;
}

const cellWidth = 32;
const cellHeight = 32;

const MonthlyCalendar: FunctionComponent<MonthlyCalendarProps> = ({
                                                                      startDate,
                                                                      endDate,
                                                                      monthDate,
                                                                      selectDate,
                                                                      startFromMonday
                                                                  }) => {
    const month = monthDate.getMonth();
    const year = monthDate.getFullYear();
    const firstDate = new Date(year, month);
    const firstPositionDate = new Date(year, month, firstDate.getDate() - firstDate.getDay());
    let days = [];
    let dates = [];
    let i = 0;
    let day;
    do {
        day = new Date(firstPositionDate.getFullYear(), firstPositionDate.getMonth(), firstPositionDate.getDate() + i);
        if (day.getMonth() === firstPositionDate.getMonth() || day.getMonth() === month) {
            days.push(day);
            if (i < 7) {
                dates.push(day.toLocaleString('default', {weekday: "short"}))
            }
            i++;
        } else {
            i = -1;
        }
    } while (i > -1);

    return <MonthlyCalendarWrapper>
        <MonthlyCalendarHeader>
            <span>{monthDate.toLocaleString('default', {month: "long"})}</span>
            <span>{monthDate.toLocaleString('default', {year: "numeric"})}</span>
        </MonthlyCalendarHeader>
        <MonthlyCalendarTitle {...{cellWidth}}>
            {
                dates.map((date, index) => <span key={index}>{date}</span>)
            }
        </MonthlyCalendarTitle>
        <MonthlyCalendarCells {...{cellWidth, cellHeight}}>
            {days.map(((date, index) => {
                const onClick = () => selectDate(date);
                const props = {
                    cellWidth,
                    key: index,
                    cellHeight
                };
                if (firstPositionDate.getMonth() !== firstDate.getMonth() && date.getMonth() === firstPositionDate.getMonth()) {
                    return <UnselectableCell {...props}>{date.getDate()}</UnselectableCell>;
                }
                if (date.getTime() === startDate?.getTime()) {
                    return <StartCell {...props} {...{onClick}}>
                        <div>{date.getDate()}</div>
                    </StartCell>
                } else if (date.getTime() === endDate?.getTime()) {
                    return <EndCell {...props} {...{onClick}}>
                        <div>{date.getDate()}</div>
                    </EndCell>
                } else if (startDate && endDate && date.getTime() > startDate.getTime() && date.getTime() < endDate.getTime()) {
                    return <SelectedCell {...props} {...{onClick}}>
                        <div>{date.getDate()}</div>
                    </SelectedCell>
                }
                return <SelectableCell {...props} {...{onClick}}>{date.getDate()}</SelectableCell>
            }))}
        </MonthlyCalendarCells>
    </MonthlyCalendarWrapper>;
};

export default MonthlyCalendar;
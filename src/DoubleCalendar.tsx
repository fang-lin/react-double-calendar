import React, {useState} from "react";
import {FunctionComponent} from "react";
import MonthlyCalendar from "./MonthlyCalendar";
import {DoubleCalendarWrapper, DoubleCalendars, DoubleCalendarHeader} from "./DoubleCalendar.style";

interface DoubleCalendarProps {
    startDate?: Date;
    endDate?: Date;
    setStartDate: any;
    setEndDate: any;
    startFromMonday?: false;
}

const DoubleCalendar: FunctionComponent<DoubleCalendarProps> = ({
                                                                    startDate,
                                                                    endDate,
                                                                    setStartDate,
                                                                    setEndDate,
                                                                    startFromMonday = false
                                                                }) => {
    const [firstMonthDate, setFirstMonthDate] = useState(startDate || new Date());
    const secondMonthDate = new Date(firstMonthDate);
    secondMonthDate.setMonth(firstMonthDate.getMonth() + 1);

    const selectDate = (date: Date) => {
        if (startDate && date.getTime() === startDate.getTime()) {
            setStartDate(null);
            return;
        }
        if (endDate && date.getTime() === endDate.getTime()) {
            setEndDate(null);
            return;
        }

        if (startDate && date.getTime() > startDate.getTime()) {
            setEndDate(new Date(date));
            return;
        }

        if (startDate && date.getTime() < startDate.getTime()) {
            setStartDate(new Date(date));
            setEndDate(new Date(startDate));
            return;
        }
        if (endDate && endDate && date.getTime() < endDate.getTime()) {
            setStartDate(new Date(date));
            return;
        }
        if (endDate && endDate && date.getTime() > endDate.getTime()) {
            setStartDate(new Date(endDate));
            setEndDate(new Date(date));
            return;
        }
        setStartDate(new Date(date));
    };

    return <DoubleCalendarWrapper>
        <DoubleCalendarHeader>
            <span onClick={() => {
                firstMonthDate.setMonth(firstMonthDate.getMonth() - 1)
                setFirstMonthDate(new Date(firstMonthDate));
            }}>Prev</span>
            <span onClick={() => {
                firstMonthDate.setMonth(firstMonthDate.getMonth() + 1)
                setFirstMonthDate(new Date(firstMonthDate));
            }}>Next</span>
        </DoubleCalendarHeader>
        <DoubleCalendars>
            <MonthlyCalendar {...{startDate, endDate, monthDate: firstMonthDate, selectDate, startFromMonday}}/>
            <MonthlyCalendar {...{startDate, endDate, monthDate: secondMonthDate, selectDate, startFromMonday}}/>
        </DoubleCalendars>
    </DoubleCalendarWrapper>
};

export default DoubleCalendar;
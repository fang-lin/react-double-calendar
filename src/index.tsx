import {render} from 'react-dom';
import React, {useState} from 'react';
import DoubleCalendar from "./DoubleCalendar";

const dom = document.getElementById('root');

if (dom) {
    const Root = () => {
        const [startDate, setStartDate] = useState();
        const [endDate, setEndDate] = useState();
        return <DoubleCalendar {...{startDate, endDate, setStartDate, setEndDate}}/>;
    };
    render(<Root/>, dom);
}
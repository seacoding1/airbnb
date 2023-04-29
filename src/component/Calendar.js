import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <div style={{ overflow: "hidden" }}>
            <div style={{ marginBottom: "60px", float: "left", width: "50%" }}>
                <h3 style={{marginBottom: "20px"}}>예약 날짜 선택</h3>
                <div style={{marginBottom: "10px"}}>선택 날짜:</div>
                {startDate.getFullYear()+"년 "+(startDate.getMonth()+1)+"월 "+startDate.getDate()+"일"} 부터<br/>
                {endDate===null ? '' : endDate.getFullYear()+"년 "+(endDate.getMonth()+1)+"월 "+endDate.getDate()+"일 까지"}
            </div>
            <div style={{ padding: "10px", float: "right" }}>
                <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline />
            </div>
        </div>
    );
};

export default Calendar;


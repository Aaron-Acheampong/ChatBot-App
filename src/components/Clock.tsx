import { useState, useEffect } from 'react'

import ClockClasses from './Clock.module.css';



function Clock() {

    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const intervalId = setTimeout(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearTimeout(intervalId);
        };
    }, [time]);


    function formatTime(): string {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(num): string {
        return (num < 10 ? "0" : "") + num;
    }




  return (
    <div className={ClockClasses['clock-container']}>
        <span className={ClockClasses.clock}>{formatTime()}</span>
    </div>
  )
}

export default Clock

import { DAY_DURATION } from '@utils/date';
import Ruler from './Ruler';
import Day from './Day';
import './Timetable.css'
import { useEffect, useRef, useState } from 'react';

// preserveAspectRatio="none" on the whole svg
// vector-effect="non-scaling-stroke" on the line to keep them 1px
import gridBg from './gridBg.svg'

export default function Timetable({ date, length, events = [] }) {

    let ref = useRef(null);

    let [height, setHeight] = useState(2040);

    const onScroll = (ev) => {
        if (ev.ctrlKey) {
            console.log(height)
            ev.preventDefault();
            // console.log(ev.wheelDeltaY)
            setHeight(Math.max(1320, height + ev.wheelDeltaY))
        }

    }

    useEffect(() => {
        ref.current.addEventListener('wheel', onScroll);
    }, [height])

    console.log(height)

    let start = structuredClone(date)
    start.setHours(0, 0, 0, 0);


    let days = [...Array(length).keys()].map((key) => {
        return <Day key={key} date={new Date(start.getTime() + key * DAY_DURATION)} />
    })


    return (
        <div className='daySpanClamp'>
            <div ref={ref} className="daySpan" style={{ backgroundImage: `url(${gridBg})`, height: `${height}px` }}>
                <Ruler />
                <div className="days">
                    {days}
                </div>
            </div>
        </div>
    )
}